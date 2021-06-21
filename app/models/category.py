from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    years = db.Column(db.String, nullable = False)


    products = db.relationship("Product", back_populates="category")

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name, 
        "years": self.years
        }