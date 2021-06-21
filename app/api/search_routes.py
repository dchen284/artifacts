# External Imports
from flask import Blueprint, request
# Internal Imports
from app.models import Product

search_routes = Blueprint('search', __name__)


@search_routes.route('/<search_term>', methods=['GET', 'POST'])
def search(search_term):
    products = Product.query.filter(Product.name.ilike(f'%{search_term}%')).all()
    products_to_dict = [product.to_dict() for product in products]
    # print('>>>>>>', products_to_dict)
    return {'search_results': products_to_dict}