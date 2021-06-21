# from app.models import db, Category
'''

def seed_categories():
    c1 = Category(name="Prehistoric")
    c2 = Category(name="Antiquities")
    c2 = Category(name="Modern")
    c2 = Category(name="Future")

    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()

'''