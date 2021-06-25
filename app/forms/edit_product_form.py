from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField 
from wtforms.validators import DataRequired, Email, ValidationError


class EditProductForm(FlaskForm):
    quantity = IntegerField('quantity')
    price = IntegerField('price', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description')
    # image = StringField('image')
    userId = IntegerField('userId', validators=[DataRequired()])
    categoryId = IntegerField('categoryId', validators=[DataRequired()])