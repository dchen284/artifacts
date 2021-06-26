from flask import Blueprint, jsonify, session, request
from app.models import Product, Category, db
from app.forms.product_form import ProductForm
from app.forms.edit_product_form import EditProductForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

product_routes = Blueprint('category', __name__)

@product_routes.route('/<category>')
def products(category):
  categoryObj = Category.query.filter(Category.name.like(category)).first()
  products = Product.query.filter(Product.categoryId == categoryObj.id).all()
  return jsonify([product.to_dict() for product in products])


@product_routes.route('/products/<productId>')
def retrieve_product(productId):
  productObj = Product.query.get(productId)
  return productObj.to_dict()


@product_routes.route('/user/<Id>')
def user_products(Id):
  products = Product.query.filter(Product.userId == Id).all()
  return jsonify([product.to_dict() for product in products])



@product_routes.route('/new-product', methods=['POST'])
def new_product():
  # print("BEFORE IF: POST REQUEST RECEIVED", request.form, request.files)
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  product = Product()
  if form.validate():
    form.populate_obj(product)
    # print("AFTER IF: product", product.name)
  if "image" not in request.files:
    return {"errors": "image required"}, 400

  image = request.files["image"]

  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400

  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)

  if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
    return upload, 400

  product.imgURL = upload["url"]
  db.session.add(product)
  db.session.commit()
  return product.to_dict(), 200


@product_routes.route('/products/<productId>', methods=['DELETE'])
def remove_product(productId):
  productObj = Product.query.get(productId)
  db.session.delete(productObj)
  db.session.commit()
  return jsonify("Product Removed")

# If there's an imgURL, just update based on form
# If there's a file in request.files, upload to s3
@product_routes.route('/products/<productId>', methods=['PUT'])
def update_product(productId):
  productObj = Product.query.get(productId)
  form = EditProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  # print("validated?",  form.validate(), form.errors)
  # print("THE DATA", form.data)
  if form.validate():
    form.populate_obj(productObj)

  if "image" in request.files and allowed_file(request.files["image"].filename):
    image = request.files["image"]
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" in upload:
      productObj.imgURL = upload["url"]
    else:
      return upload, 400


  db.session.add(productObj)
  db.session.commit()
  return productObj.to_dict()
