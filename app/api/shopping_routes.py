from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Product, ShoppingCartItem, Order, db


shopping_routes = Blueprint('shopping', __name__)


@shopping_routes.route('/<int:userId>')
@login_required
def get_items(userId):
    items = ShoppingCartItem.query.filter(ShoppingCartItem.userId == userId).all()
    # print("SHOPPING CART ITEMS", items)
    return jsonify([item.to_dict() for item in items])


@shopping_routes.route('/', methods=['POST'])
@login_required
def shopping_cart():
    # Convert request data to JSON Object
    data = request.get_json()
    # print("ITEM DATA ***", data)
    # Query for item based on matching productId and UserId
    cart_item = ShoppingCartItem.query.filter(ShoppingCartItem.productId == data['productId']).filter(ShoppingCartItem.userId == data['userId']).first()

    # If the item does not exist, add it to the database
    if cart_item is None:
        item = ShoppingCartItem()
        item.userId = data['userId']
        item.productId = data['productId']
        item.quantity = data['quantity']

        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    # If item does exist update quantity
    else:
        cart_item.quantity += data['quantity']
        db.session.add(cart_item)
        db.session.commit()
        return cart_item.to_dict()


@shopping_routes.route('/', methods=['DELETE'])
@login_required
def delete_cart_item():
    data = request.get_json()
    # print('>>>>>>>.data', data)
    cart_item = ShoppingCartItem.query.get(data['id'])
    db.session.delete(cart_item)
    db.session.commit()
    return {'success': 'success'}


@shopping_routes.route('/', methods=['PUT'])
@login_required
def update_cart_item():
    data = request.get_json()
    # print('>>>>>>>update.data', data)
    cart_item = ShoppingCartItem.query.get(data['id'])
    cart_item.quantity = data['quantity']
    # print('++++++', cart_item.to_dict())
    db.session.add(cart_item)
    db.session.commit()
    return cart_item.to_dict()


'''
 for each shopping cart item, query for the given product to get the most up-to-date quantity
        check availability
            if there is not availaibity, close the modal, render the error
                on the shopping cart page, checkout button is disabled
            if there is availability
                create an order
                update all product quantities
                clear shopping_cart_items on backend
                clear ShoppingCart component on frontend
                redirect to root
* I should expect a list of objects representing each checkout item
'''

@shopping_routes.route('/checkout', methods=['POST'])
@login_required
def checkout_cart():
    # print(request.get_json())

    cart_items = request.get_json()
    userId = cart_items[0]['userId']
    order = Order(userId=userId)
    errors = []

    list_of_data = []
    try:
        for item in cart_items:
            curr_product = Product.query.get(item['productId'])
            if curr_product is None:
                errors.append('Product no longer exists')
            elif item['quantity'] > curr_product.quantity:
                errors.append('Not enough inventory in store')
            list_of_data.append(
                (curr_product,
                 item['quantity'] if curr_product is not None else None)
            )
            order.products.append(curr_product)
        # process order after for loop
        if errors:
            raise ValueError(errors)
        db.session.add(order)

        # update quantity of each product
        for data in list_of_data:
            data[0].quantity -= data[1]
            db.session.add(data[0])

        # clear shopping cart
        shopping_cart_items = ShoppingCartItem.query.filter(ShoppingCartItem.userId == userId).all()

        for item in shopping_cart_items:
            db.session.delete(item)

        db.session.commit()
        return jsonify([])
    except ValueError:
        return jsonify(errors)
