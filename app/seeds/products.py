from app.models import db, Product

def seed_products():
    # skeleton => Product(quantity=, price=, name='', description='', imgURL='', userId=, categoryId=)

    # Prehistoric 
    p1 = Product(
        name='Authentic Saber-Tooth Tiger Cub',
        quantity=20, price=10000, userId=1, categoryId=1,
        imgURL='http://pm1.narvii.com/6490/def309f188af821c6f0b2bec71fdd2b2eb8fa1f0_hq.jpg',
        description='''Sure to bring a Smilodon to your face, this adorable
            saber-tooth tiger cub will be sure to delight children of all
            ages.  Lovingly procured from the Pleistocene epoch, this
            feline\'s loving smile will make you feel warm all over.
            Seller is not responsible for resulting missing children and/or
            injuries from this product.'''
    )
    p2 = Product(
        name='Artisinal Mammoth Jerky',
        quantity=100, price=250, userId=1, categoryId=1,
        imgURL='https://cdn.shopify.com/s/files/1/1516/5908/products/MeatMountain_1024x1024.jpg?v=1510154162',
        description='''Satisfies even mammoth-size cravings!  Imported from the
            Holocene glacial retreat, this delectable jerky was made by real
            Neanderthals, giving you a real taste of history.'''
    )
    # p3 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=4, categoryId=1)
    # p4 = Product(quantity=2, price=1, name='', description='', imgURL='', userId=5, categoryId=1)
    # p5 = Product(quantity=6, price=150000, name='T-Rex Skull', description='', imgURL='', userId=6, categoryId=1)

    # Antiquities
    a1 = Product(
        name='Original "Fifty Raids of Gray"',
        quantity=100, price=250, userId=1, categoryId=2,
        imgURL='https://media.istockphoto.com/photos/dead-sea-scroll-replica-picture-id1024215380',
        description='''Rescued from the Greaty Library of Alexandria right
            before the great fire, these are original copies of the
            great romance novel, "Fifty Raids of Gray"!  Professional
            scriveners have transcripted this wonderful tale onto the finest
            parchment. This scroll makes a great piece on the coffee table,
            and is great for late-night reading!''',
    )
    a2 = Product(
        name='Julius Caesar Daggers',
        quantity=23, price=750, userId=1, categoryId=2,
        imgURL='https://bladesmithsforum.com/uploads/monthly_2017_04/58e68b3d90cd0_Pugia1.JPG.53d6b9d183ce4df25733f64048b43f1c.JPG',
        description='''These pugione daggers are to die for!  Act out your
            inner conspiratorial fantasies by wielding authentic blades
            used by the Roman senators on the Ides of March.  A
            sic (semper tyrannus) conversation piece!''',
    )
    a3 = Product(
        name='THE Sphinx\'s Nose',
        quantity=1, price=9000000, userId=1, categoryId=2,
        imgURL='http://images.artparks.co.uk/sculpture/lrg_img/artpark_sculpture_will_davies_nose_1.jpg',
        description='''Q: What happened to the Sphinx\'s nose?  A: It needed
            to spice up your living space!  Originally lost in time, our
            crack team of time-travelling procurement agents have been able
            to obtain the authentic Sphinx\'s nose for you!  Who nose what
            fortunes will be in store for you with this centerpiece!''',

    )
    # a4 = Product(quantity=100, price=1, name='a4', description='', imgURL='', userId=5, categoryId=2)
    # a5 = Product(quantity=1, price=1, name='a5', description='', imgURL='', userId=6, categoryId=2)

    # Modern
    m1 = Product(
        name='Prohibition Era Bootlegger\'s Wine',
        quantity=200, price=50, userId=1, categoryId=3,
        imgURL='https://www.thevintagenews.com/2015/07/28/when-america-went-dry-23-awesome-facts-about-prohibition-era/',
        description='''Bring the spirit of the 1920s to your table!  This
            bespoke wine was made under the cover of night, with a secret
            recipe, and brought to you from the Prohibition Era.  This
            item is not FDA approved; seller is not response for blindness,
            nausea, other minor side effects, other major side effects,
            and/or death.''',
    )
    m2 = Product(quantity=5, price=450, name="Malcom X's Glasses", description='', imgURL='https://i.pinimg.com/originals/a1/4b/cb/a14bcb3e4eab84a87b717a38f36eae1c.jpg', userId=4, categoryId=3)
    m3 = Product(quantity=20, price=600, name='Bose Quietcomfort Headphones', description='Noise cancelling still works! Made in 2010.', 
        imgURL='https://snpi.dell.com/snp/images/products/large/en-us~A9895712/A9895712.jpg', 
        userId=4, 
        categoryId=3)
    m4 = Product(quantity=50, price=200, name='Birkenstock sandals', description='Never goes out of style. 100 percent real vegan leather',
         imgURL='https://content.backcountry.com/images/items/900/BRK/BRK0039/HABOILLEA.jpg',
         userId=5, categoryId=3)
    m5 = Product(quantity=1, price=900000, name='The Declaration of Independence', description='They say something interesting happens when you rub lemon juice on the back...' , imgURL='', userId=6, categoryId=2)

    # Future
    f1 = Product(
        name='iPhone millenium: Phone of the future!',
        quantity=50, price=2000, userId=1, categoryId=4,
        imgURL='http://4.bp.blogspot.com/-8nXEq3tPvsM/VMZ489STLMI/AAAAAAABTss/5ecvC9SNmy0/s1600/iPhone%2BX%2B-%2BiPhone%2B7%2BFuturistic%2BConcept.jpg',
        description='''Tired of being behind the latest trends in phones?
            Race to the front, by buying future tech, today!  This iPhone
            model will be sure to make you the talk of the town, with its
            stunning crystal-clear body and lightning-speed apps powered
            by quantum computing and nano-hamsters spinning nano-wheels!''',
    )
    # f2 = Product(quantity=10, price=1, name='', description='', imgURL='', userId=3, categoryId=4)
    # f3 = Product(quantity=20, price=1, name='', description='', imgURL='', userId=4, categoryId=4)
    # f4 = Product(quantity=100, price=1, name='', description='', imgURL='', userId=5, categoryId=4)
    # f5 = Product(quantity=1, price=1, name='', description='', imgURL='', userId=6, categoryId=4)

    products = [
        p1, p2, 
        a1, a2, a3, 
        m1, m2, m3, m4, m5,
        f1,
    ]
    for product in products:
        db.session.add(product)
    
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
    
