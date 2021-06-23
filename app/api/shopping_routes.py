from flask import Blueprint, jsonify, session, request
from app.models import ShoppingCartItem, db


shopping_routes = Blueprint('shopping', __name__)

@shopping_routes.route('/<int:userId>')
def get_items(userId):
    items = ShoppingCartItem.query.filter(ShoppingCartItem.userId == userId).all()
    print("SHOPPING CART ITEMS", items)
    return jsonify([item.to_dict() for item in items])


@shopping_routes.route('/', methods=['POST'])
def shopping_cart():
    # Convert request data to JSON Object
    data = request.get_json()

    # Query for item based on matching productId and UserId
    cart_item = ShoppingCartItem.query.filter(ShoppingCartItem.productId == data['productId'] and ShoppingCartItem.userId == data['userId']).first()

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
