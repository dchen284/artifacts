from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Review
from app.models.db import db

reviews_routes = Blueprint('reviews', __name__)


# GET /api/reviews
@reviews_routes.route('/')
def reviews_all():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}



# POST /api/reviews
@reviews_routes.route('/<int:reviewId>', methods=["POST"])
@login_required
def create_review():
    data = request.get_json()
    review = Review(rating=data["rating"], content=data["content"],
                    userId=current_user.id, productId=data["product_id"])
    db.session.add(review)
    db.session.commit()

    return review.to_dict()
    
