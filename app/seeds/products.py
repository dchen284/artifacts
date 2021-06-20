# from app.models import db, Product

'''

def seed_products():
    # skeleton => Product(quantity=, price=, name='', description='', imgURL='', userId=, categoryId=)

    # Prehistoric 
    p1 = Product(quantity=5, price=1, name='', description='', imgURL='', userId=2, categoryId=1)
    p2 = Product(quantity=10, price=1, name='', description='', imgURL='', userId=3, categoryId=1)
    p3 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=4, categoryId=1)
    p4 = Product(quantity=2, price=1, name='', description='', imgURL='', userId=5, categoryId=1)
    p5 = Product(quantity=6, price=150000, name='T-Rex Skull', description='', imgURL='', userId=6, categoryId=1)

    # Antiquities
    a1 = Product(quantity=5, price=1, name='', description='', imgURL='', userId=2, categoryId=2)
    a2 = Product(quantity=10, price=1, name='', description='', imgURL='', userId=3, categoryId=2)
    a3 = Product(quantity=20, price=1, name='', description='', imgURL='', userId=4, categoryId=2)
    a4 = Product(quantity=100, price=1, name='', description='', imgURL='', userId=5, categoryId=2)
    a5 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=6, categoryId=2)

    # Modern
    m1 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=2, categoryId=3)
    m2 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=3, categoryId=3)
    m3 = Product(quantity=20, price=600, name='Bose Quietcomfort Headphones', description='Noise cancelling still works! Made in 2010.', imgURL='', userId=4, categoryId=3)
    m4 = Product(quantity=50, price=200, name='Birkenstock sandals', imgURL='Never goes out of style. 100 percent real vegan leather', userId=5, categoryId=3)
    m5 = Product(quantity=1, price=900000, name='The Declaration of Independence', description='They say something interesting happens when you rub lemon juice on the back...' , imgURL='', userId=6, categoryId=2)

    # Future
    f1 = Product(quantity=5, price=1, name='', description='', imgURL='', userId=2, categoryId=4)
    f2 = Product(quantity=10, price=1, name='', description='', imgURL='', userId=3, categoryId=4)
    f3 = Product(quantity=20, price=1, name='', description='', imgURL='', userId=4, categoryId=4)
    f4 = Product(quantity=100, price=1, name='', description='', imgURL='', userId=5, categoryId=4)
    f5 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=6, categoryId=4)

    products = [
        p1, p2, p3, p4, p5,
        a1, a2, a3, a4, a5,
        m1, m2, m3, m4, m5,
        f1, f2, f3, f4, f5,
    ]
    for product in products:
        db.session.add(product)
    
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
    
'''