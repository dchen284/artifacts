from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Review

reviews_routes = Blueprint('reviews', __name__)


# GET /api/reviews
@reviews_routes.route('/')
def reviews_all():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}



# POST /api/reviews
# @reviews_routes.route()
