from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import Review
from app.models.db import db
from app.forms.review_form import ReviewForm

reviews_routes = Blueprint('reviews', __name__)


# GET /api/reviews
@reviews_routes.route('/')
def reviews_all():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}



# POST /api/reviews
@reviews_routes.route('/new_review', methods=["POST"])
@login_required
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    review = Review()
    if form.validate():
        form.populate_obj(review)
    
    db.session.add(review)
    db.session.commit()

    return review.to_dict()


# DELETE /api/reviews/:reviewId
@reviews_routes.route('/<int:reviewId>', methods=["DELETE"])
def delete_review(reviewId):
    review = Review.query.get(reviewId)
    db.session.delete(review)
    db.session.commit()

    return review.to_dict()

