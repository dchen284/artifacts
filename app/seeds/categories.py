from app.models import db, Category


def seed_categories():
    c1 = Category(name="Prehistoric", years="Before 3000 B.C.")
    c2 = Category(name="Antiquities", years="3000 B.C. - 1500 A.D.")
    c3 = Category(name="Modern", years="1500 A.D. - 2100 A.D.")
    c4 = Category(name="Future", years="After 2100 A.D.")

    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()

