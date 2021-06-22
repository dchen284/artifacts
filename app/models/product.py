from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key = True)
  quantity = db.Column(db.Integer, nullable = False)
  price = db.Column(db.Integer, nullable = False)
  name = db.Column(db.String(100), nullable = False)
  description = db.Column(db.Text)
  imgURL = db.Column(db.String(255), nullable = False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable = False)

  user = db.relationship("User", back_populates="products")
  category = db.relationship("Category", back_populates="products")
  reviews = db.relationship("Review", back_populates="product")
  shopping_cart_items = db.relationship("ShoppingCartItem", back_populates="products")

  def to_dict(self):
    return {
      "id": self.id,
      "quantity": self.quantity,
      "price": self.price,
      "name": self.name,
      "description": self.description,
      "imgURL": self.imgURL,
      "userId": self.userId,
      "categoryId": self.categoryId
    }