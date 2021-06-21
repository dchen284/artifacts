from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField 
from wtforms.validators import DataRequired, Email, ValidationError


class ProductForm(FlaskForm):
    quantity = IntegerField('quantity', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description')
    userId = IntegerField('userId', validators=[DataRequired()])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])