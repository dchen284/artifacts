from flask import Blueprint, request
from app.models import Product, Order, ShoppingCartItem, db

order_routes = Blueprint('orders', __name__)


@order_routes.route('/', methods=['POST'])
def post_order():
    # data = request.get_json()
    # cart_items = ShoppingCartItem.query.filter_by(data.userId).all()
    cart_items = ShoppingCartItem.query.all()
    try:
        # create order object
        new_order = Order()

        for item in cart_items:
            if item.quantity > item.products.quantity:
                raise ValueError('Not enough inventory in store')

        # add order object to database
        # delete all cart items
        return 'did an order'
    except ValueError:
        return 'not enough inventory, close modal'
