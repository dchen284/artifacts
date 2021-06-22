from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField 
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    productId = IntegerField('categoryId', validators=[DataRequired()])