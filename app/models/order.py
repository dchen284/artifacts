from .db import db

order_product = db.Table(
    "order_product",
    db.Column('orderId', db.Integer, db.ForeignKey('orders.id'), primary_key=True),
    db.Column('productId', db.Integer, db.ForeignKey('products.id'), primary_key = True)
)


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    user = db.relationship("User", back_populates="orders")

    products = db.relationship(
    "Product",
    secondary=order_product,
    back_populates="order"
  )