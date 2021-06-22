from .db import db


class ShoppingCartItem(db.Model):
    __tablename__ = 'shopping_cart_items'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    productId = db.Column(db.Integer, db.ForeignKey("products.id"), nullable = False)
    quantity = db.Column(db.Integer, nullable = False)

    products = db.relationship("Product", back_populates="shopping_cart_items")
    user = db.relationship("User", back_populates="shopping_cart_items")

    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "productId": self.productId,
        "quantity": self.quantity
        }