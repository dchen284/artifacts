from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


s3_test_route = Blueprint('s3-upload', __name__)


@s3_test_route.route('/upload', methods=['POST'])
@login_required
def upload_image():
    print("POST REQUEST RECEIVED", request.form, request.files)
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Image(user=current_user, url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}