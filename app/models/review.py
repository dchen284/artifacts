from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    rating = db.Column(db.Integer, nullable = False) 
    content = db.Column(db.Text, nullable = False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    productId = db.Column(db.Integer, db.ForeignKey("products.id"), nullable = False)

    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "content": self.content,
            "userId": self.userId,
            "productId": self.productId
        }