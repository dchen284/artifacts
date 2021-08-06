from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, \
    Length, Regexp, ValidationError
from app.models import User

regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"


def user_exists(form, field):
    # print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username',
                           validators=[
                               DataRequired(),
                               Length(min=3, max=40,
                                      message=("Username must be between 3 to "
                                               "40 characters long.")
                                      ),
                               ])
    email = StringField('email',
                        validators=[
                            DataRequired(), Email(), user_exists
                            ])
    password = StringField('password',
                           validators=[
                               DataRequired(),
                               Regexp(regex,
                                      message=("Minimum eight characters, "
                                               "at least one upper case "
                                               "English letter, one lower "
                                               "case English letter, one "
                                               "number and one special "
                                               "character.")
                                      ),
                            ])
    repeat_password = StringField('repeat_password',
                                  validators=[
                                      DataRequired(),
                                      EqualTo('password',
                                              message='Passwords must match'
                                              ),
                                      ])
