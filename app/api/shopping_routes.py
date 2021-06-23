from flask import Blueprint, jsonify, session, request
from app.models import ShoppingCartItem, Product, db


shopping_routes = Blueprint('shopping', __name__)

@shopping_routes.route('/', methods=['POST'])
def shopping_cart():
    data = request.get_json()
    item = ShoppingCartItem()
    item.userId = data['userId']
    item.productId = data['productId']
    item.quantity = data['quantity']

    db.session.add(item)
    db.session.commit()

    return item.to_dict()