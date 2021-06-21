# External Imports
from flask import Blueprint, request
# Internal Imports
from app.models import Category, Product

search_routes = Blueprint('search', __name__)


@search_routes.route('/<search_term>')
def search(search_term):

    # Query to see if any categories match the search term
    categories = Category.query.filter(Category.name.ilike(f'%{search_term}%')).all()

    # Queries to see if any of the product names or product descriptions match the search term

    products_by_name = Product.query.filter(Product.name.ilike(f'%{search_term}%')).all()
    products_by_descrip = Product.query.filter(Product.description.ilike(f'%{search_term}%')).all()

    # Combine all queries into one products set; set to remove repeat entries

    products = set(products_by_name) | set(products_by_descrip)
    for category in categories: # handles the cases where multiple categories match the search term
        products_by_category = Product.query.filter(Product.categoryId == category.id).all()
        products = set(products) | set(products_by_category)

    # Convert to readable list, and return
    products_to_dict = [product.to_dict() for product in products]
    return {'search_results': products_to_dict}