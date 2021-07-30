from flask import Blueprint, jsonify, session, request
from app.models import Product, Order, db, order_product

order_routes = Blueprint('orders', __name__)

@order_routes.route('/user/<Id>')
def user_orders(Id):
    orders = Order.query.filter(Order.userId == Id).all()
    return jsonify([order.to_dict() for order in orders])

@order_routes.route('/<orderId>')
def user_orders_products(orderId):
    orders = order_product.query.filter(order_product.id == orderId).all()
    order_products = Product.query.filter(Product.id == orders.productId)
    print(order_products)
    return jsonify([order_product.to_dict() for order_product in order_products])

@order_routes.route('/products/<productId>')
def retrieve_order_product(productId):
    productObj = Product.query.get(productId)
    return productObj.to_dict()

