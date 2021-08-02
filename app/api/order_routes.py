from flask import Blueprint, jsonify, session, request
from app.models import Product, Order, db, order_product

order_routes = Blueprint('orders', __name__)

@order_routes.route('/user/<Id>')
def user_orders(Id):
    orders = Order.query.filter(Order.userId == Id).all()
    order_ids = []
    for order in orders:
        order_ids.append(order.id)

    orderProducts = [order.products for order in orders]
    order_list = []
    for element in orderProducts:
        sub_list = []
        for product in element:
            sub_list.append(product.to_dict())
        order_list.append(sub_list)
    
    order_dict = {}
    for i in range(len(order_list)):
        order_dict[order_ids[i]] = order_list[i]
    
    return order_dict

@order_routes.route('/<orderId>')
def user_orders_products(orderId):
    orders = order_product.query.filter(order_product.id == orderId).all()
    order_products = Product.query.filter(Product.id == orders.productId)
    return jsonify([order_product.to_dict() for order_product in order_products])

@order_routes.route('/products/<productId>')
def retrieve_order_product(productId):
    productObj = Product.query.get(productId)
    return productObj.to_dict()

