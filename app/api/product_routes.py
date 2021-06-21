from flask import Blueprint, jsonify, session, request
from app.models import Product, Category, db


product_routes = Blueprint('category', __name__)

@product_routes.route('/<category>')
def products(category):
  print(category)
  categoryObj = Category.query.filter(Category.name.like(category)).first()
  # print(categoryId.id)
  products = Product.query.filter(Product.categoryId == categoryObj.id).all()
  return {'products': [product.to_dict() for product in products]}
