from flask import Blueprint, jsonify, session, request
from app.models import Product, Order, db

order_routes = Blueprint('orders', __name__)

@order_routes.route('/user/<Id>')
def user_orders(Id):
    orders = Order.query.filter(Order.userId == Id).all()
    print('ORDERS:', jsonify([order.to_dict() for order in orders]))
    return jsonify([order.to_dict() for order in orders])


@order_routes.route('/products/<productId>')
def retrieve_order_product(productId):
    productObj = Product.query.get(productId)
    return productObj.to_dict()

