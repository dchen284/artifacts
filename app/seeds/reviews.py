from app.models import db, Review


def seed_reviews():
    reviews = [
    Review(
        rating=5, userId=1, productId=1,
        content="The cutest! Would buy again."
    ),
    Review(
        rating=1, userId=2, productId=1,
        content="Bit my child, terrible."
    ),
]

    for review in reviews:
        db.session.add(review)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()