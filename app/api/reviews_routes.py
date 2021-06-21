from flask import Blueprint, jsonify
from app.models import Review

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/')
def reviews_all():
    reviews = Review.query.all()