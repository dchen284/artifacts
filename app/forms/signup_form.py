from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError
from app.models import User


def user_exists(form, field):
    # print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


# def repeat_password_matches(form, field):
#     password = field.data
#     repeat_password = field.data
#     print('password', password)
#     print('repeat_password', repeat_password)
#     if not password == repeat_password:
#         raise ValidationError("Password and repeat password do not match.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email',
                        validators=[
                            DataRequired(), Email(), user_exists
                            ])
    password = StringField('password', validators=[DataRequired()])
    repeat_password = StringField('repeat_password',
                                  validators=[
                                      DataRequired(),
                                      EqualTo('password',
                                              message='Passwords must match'
                                              ),
                                      ])
