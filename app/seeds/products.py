from app.models import db, Product

def seed_products():
    # skeleton => Product(quantity=, price=, name='', description='', imgURL='', userId=, categoryId=)

    # String concatentation for linter purposes

    # Prehistoric
    p1 = Product(
        name='Authentic Saber-Tooth Tiger Cub',
        quantity=20, price=10000, userId=1, categoryId=1,
        imgURL='https://pm1.narvii.com/6490/def309f188af821c6f0b2bec71fdd2b2eb8fa1f0_hq.jpg',
        description=('Sure to bring a Smilodon to your face, this adorable '
                     'saber-tooth tiger cub will be sure to delight children '
                     'of all ages.  Lovingly procured from the Pleistocene '
                     'epoch, this feline\'s loving smile will make you feel '
                     'warm all over.  Seller is not responsible for resulting '
                     'missing children and/or injuries from this product.')
    )
    p2 = Product(
        name='Artisinal Mammoth Jerky',
        quantity=100, price=250, userId=1, categoryId=1,
        imgURL='https://cdn.shopify.com/s/files/1/1516/5908/products/MeatMountain_1024x1024.jpg?v=1510154162',
        description=('Satisfies even mammoth-size cravings!  Imported from '
                     'the Holocene glacial retreat, this delectable jerky was '
                     'made by real Neanderthals, giving you a real taste of '
                     'history.')
    )
    p3 = Product(quantity=3, price=10000, name='Original Cave Drawings', description='One of a kind pieces of art that were thought to be lost to the sands of time. Please no flash photography.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/frontiers-in-psychology-cave-art-origin-modern-language.jpg', userId=4, categoryId=1)
    p4 = Product(
        name='Williamsonia - Living Prehistory!',
        quantity=100, price=100, userId=2, categoryId=1,
        imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Williamsonia_life_restoration_-_MUSE.jpg/220px-Williamsonia_life_restoration_-_MUSE.jpg',
        description=('Want to give your garden a fresh new look?  Add this '
                     'gorgeous prehistoric plant to show the timeless '
                     'beauty that is nature.  Fun for botanists both '
                     'young and old!')
    )
    p5 = Product(
        name='Stone Age Canoe',
        quantity=40, price=30000, userId=2, categoryId=1,
        imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Dugout_boats_Kierikki_Centre_Oulu_20130526.JPG/220px-Dugout_boats_Kierikki_Centre_Oulu_20130526.JPG',
        description=('Dugouts are the oldest boat type fro prehistory, dating '
                     'back about 8,000 years to the Neolithic Stone Age.  You '
                     'simply won\'t find this kind of quality wood anywhere '
                     '(or anytime) else!')
    )
    p6 = Product(
        name='Mystery Fish from 400 million years ago!',
        quantity=100, price=30000, userId=2, categoryId=1,
        imgURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foceana.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flightbox_full%2Fpublic%2Fcoelacanth.jpg%3Fitok%3DHTe_gtF9&f=1&nofb=1',
        description=('Be the envy of your peers by adding this fantastic fish '
                     'to your aquarium!  Its armored scales allow it to fend '
                     'off the most vicious of attacks.  Beware Southeast '
                     'Asian vendors selling similar items, the real deal can '
                     'only be found here on Artifacts!')
    )
    p7 = Product(
        name='Trilobite Pet',
        quantity=200, price=15000, userId=3, categoryId=1,
        imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Triarthrus_NT_small.jpg/220px-Triarthrus_NT_small.jpg',
        description=('Sea monkeys are soooo last year.  Go way back into '
                     'the past to raise one of history\'s most famous sea '
                     'creatures!  Easy to care for, this item comes with '
                     'packets of prehistoric plankton needed for a happy '
                     'anthropod.')
    )
    p8 = Product(
        name='Mesolithic Hut',
        quantity=50, price=300000, userId=3, categoryId=1,
        imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hunter_gatherer%27s_camp_at_Irish_National_Heritage_Park_-_geograph.org.uk_-_1252699.jpg/330px-Hunter_gatherer%27s_camp_at_Irish_National_Heritage_Park_-_geograph.org.uk_-_1252699.jpg',
        description=('Gone fishing, but want to relax in something unique? '
                     'Have our Old World crafters make you an authentic '
                     'Mesolithic Hut!  Get back to nature and time for '
                     'a wonderfully charming abode.  You provide the '
                     'appropriate waterfront site.')
    )
    p9 = Product(
        name='Randomized Prehistoric Egg',
        quantity=100, price=1000000, userId=3, categoryId=1,
        imgURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2F396af3a4-6730-4e71-9993-22cc69bb1d7d%2Fsvn%2Fdesign-toscano-garden-statues-ne140031-64_1000.jpg&f=1&nofb=1',
        description=('What\'s inside?  No one will know, until you buy '
                     'buy buy!  Each purchase gives you a randomized '
                     'egg, each capable of hatching into a charming '
                     'creature!  Keeping buying to collect the full '
                     'set of 10 possible pets!')
    )
    # p5 = Product(quantity=6, price=150000, name='T-Rex Skull', description='', imgURL='', userId=6, categoryId=1)

    # Antiquities
    a1 = Product(
        name='Original "Fifty Raids of Gray"',
        quantity=100, price=250, userId=1, categoryId=2,
        imgURL='https://www.judaicawebstore.com/media/catalog/product/Assets/NewProductImages/product_page_image_large_no_frame/D/e/Deluxe-Megilat-Esther-Scroll-JT-7102-7103-2_large.jpg',
        description=('Rescued from the Greaty Library of Alexandria right '
                     'before the great fire, these are original copies of the '
                     'great romance novel, "Fifty Raids of Gray"!  '
                     'Professional scriveners have transcripted this '
                     'wonderful tale onto the finest parchment. This scroll '
                     'makes a great piece on the coffee table, and is great '
                     'for late-night reading!'),
    )
    a2 = Product(
        name='Julius Caesar Daggers',
        quantity=23, price=750, userId=1, categoryId=2,
        imgURL='https://bladesmithsforum.com/uploads/monthly_2017_04/58e68b3d90cd0_Pugia1.JPG.53d6b9d183ce4df25733f64048b43f1c.JPG',
        description=('These pugione daggers are to die for!  Act out your '
                     'inner conspiratorial fantasies by wielding authentic '
                     'blades used by the Roman senators on the Ides of'
                     'March.  A sic (semper tyrannus) conversation piece!'),
    )
    a3 = Product(
        name='THE Sphinx\'s Nose',
        quantity=1, price=9000000, userId=1, categoryId=2,
        imgURL='https://chairish-prod.global.ssl.fastly.net/image/product/master/86266890-c840-4b81-bde6-86e10a95c4e8',
        description=('Q: What happened to the Sphinx\'s nose?  A: It needed '
                     'to spice up your living space!  Originally lost in time, '
                     'our crack team of time-travelling procurement agents '
                     'have been able to obtain the authentic Sphinx\'s nose '
                     'for you!  Who nose what fortunes will be in store for '
                     'you with this centerpiece!'),

    )
    a4 = Product(quantity=100, price=80, name='Joshua Sandals', description='Worn by a once famous carpenter, these sandals still have many miles left on them. Worn, but not worn out, these will make you feel like you\'re walking on water!',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/istockphoto-970559914-612x612.jpg', userId=5, categoryId=2)
    a5 = Product(quantity=300, price=900, name='Samurai Sword', description='These weapons were used by ancient warriors in Japan. The Katana, as it is known, can do more than slice through some fruit. May your foes quake when they see you wield this.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/ceba00b4646565794cbd9fe5982d8f3c.jpg', userId=6, categoryId=2)
    a6 = Product(quantity=10, price=2000, name='DaVinci Sketches', description='Original artwork from DaVinci himself, this drawing is one of his most famous works of art. Depicted here is a man with four arms and four legs. Why this many had so many limbs is still a mystery to this day. Don\'t ask how we got this.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/merlin_161422065_f398f3f3-76e6-431e-a781-69337e62c19e-superJumbo.jpg', userId=2, categoryId=2)
    a7 = Product(quantity=4, price=800000, name='Viking Ship', description='Row row row your boat.',
            imgURL='https://lh3.googleusercontent.com/proxy/hEhYns-is2oUxrWu9aVUqha9LgAYSLhK-WFO4D78hDMQRjsyGVv6YU_p_MfCmbwNUfgb42YtsfrgX5ydYV7MSg', userId=5, categoryId=2)
    a8 = Product(quantity=1, price=5000000, name='Cleopatra\'s Crown', description='The crown of the last active ruler of the Ptolemaic Kingdom of Egypt.',
            imgURL='https://theloveforhistory.files.wordpress.com/2011/05/cleopatra.gif?w=242', userId=5, categoryId=2)
    a9 = Product(quantity=30, price=1000, name='Rumi\'s Handwritten Poetry', description='"Out beyond ideas of wrongdoing and rightdoing there is a field. I\'ll meet you there. When the soul lies down in that grass the world is too full to talk about."',
            imgURL='https://content.wdl.org/4074/thumbnail/1399476860/616x510.jpg', userId=5, categoryId=2)
    a10 = Product(quantity=2, price=20000, name='Frey Pie', description='Made special by Arya Stark. I wouldn\'t eat it if I were you.',
            imgURL='https://static.wikia.nocookie.net/gameofthrones/images/8/88/Frey_pie_ep10_s6.jpg/revision/latest?cb=20160702034429', userId=5, categoryId=2)

    # Modern
    m1 = Product(
        name='Prohibition Era Bootlegger\'s Wine',
        quantity=200, price=50, userId=1, categoryId=3,
        imgURL='https://www.thevintagenews.com/wp-content/uploads/2015/07/Prohibition-small.jpg',
        description=('Bring the spirit of the 1920s to your table!  This '
                     'bespoke wine was made under the cover of night, with a '
                     'secret recipe, and brought to you from the Prohibition '
                     'Era.  This item is not FDA approved; seller is not '
                     'response for blindness, nausea, other minor side '
                     'effects, other major side effects, and/or death.'),
    )
    m2 = Product(quantity=5, price=450, name="Malcom X's Glasses", description='', imgURL='https://i.pinimg.com/originals/a1/4b/cb/a14bcb3e4eab84a87b717a38f36eae1c.jpg', userId=4, categoryId=3)
    m3 = Product(quantity=20, price=600, name='Bose Quietcomfort Headphones', description='Noise cancelling still works! Made in 2010.',
        imgURL='https://snpi.dell.com/snp/images/products/large/en-us~A9895712/A9895712.jpg',
        userId=4,
        categoryId=3)
    m4 = Product(quantity=50, price=200, name='Birkenstock sandals', description='Never goes out of style. 100 percent real vegan leather',
         imgURL='https://content.backcountry.com/images/items/900/BRK/BRK0039/HABOILLEA.jpg',
         userId=5, categoryId=3)
    m5 = Product(quantity=1, price=900000, name='The Declaration of Independence', description='They say something interesting happens when you rub lemon juice on the back...' ,
         imgURL='https://library.wustl.edu/wp-content/uploads/2016/07/160624_jwb_declaration_of_independence_003-1024x691.jpg', userId=6, categoryId=3)
    m6 = Product(quantity=1, price=300000, name='The First Basketball', description='Stitched together by the late great James Naismith himself, this ball still has plenty of bounce left!' ,
         imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/lossless-page1-220px-Basketball_historic.tif.png', userId=6, categoryId=3)
    m7 = Product(quantity=250, price=8, name='Coca-Cola', description='We went back and got the good stuff. You know...THAT coke. This will definitely put some pep in your step! Please drink responsibly.' ,
         imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/fafe33725142af7a364f21e391efd719.jpg', userId=4, categoryId=3)
    m8 = Product(quantity=120, price=250, name='Reversible Dress', description='Introducing the reversible dress, is it gold and white or black and blue? We\'ll leave it up to you how you would like to style this one of a kind article of clothing. Known for its versatility, step out in this number and you will be the talk of the town!' ,
         imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/The_Dress_(viral_phenomenon).png', userId=4, categoryId=3)
    m9 = Product(quantity=1, price=800000, name='van Gogh\'s Ear', description='One of the most talented ears in history.' ,
         imgURL='https://i.pinimg.com/originals/88/0c/14/880c14455f141a82c2014071d5cb917c.png', userId=4, categoryId=3)
    m10 = Product(quantity=1, price=7000, name='First Selfie', description='In 1839, Robert Cornelius, an American pioneer in photography, produced a daguerreotype of himself which ended up as one of the first photographs of a person.' ,
         imgURL='https://www.photoblog.com/learn/wp-content/uploads/2019/06/firstselfportraitphoto.jpg', userId=4, categoryId=3)
    m11 = Product(quantity=1, price=500000, name='Agnes Varda\'s First Camera', description='The camera that launched the French New Wave.' ,
         imgURL='https://www2.bfi.org.uk/sites/bfi.org.uk/files/fb-images/varda-agnes-004-directing-pointe%20courte-1955-on-back-of-man_1000x750.jpg', userId=4, categoryId=3)
    m12 = Product(quantity=1, price=3000, name='Trenchcoat Formerly Known as Purple', description='Put it on and watch the rain turn purple.' ,
         imgURL='https://i1.wp.com/dismantlemag.com/wp-content/uploads/2018/09/Prince-Purple-Trenchcoat.png?fit=468%2C659&ssl=1', userId=4, categoryId=3)

    # Future
    f1 = Product(
        name='iPhone millenium: Phone of the future!',
        quantity=50, price=2000, userId=1, categoryId=4,
        imgURL='https://4.bp.blogspot.com/-8nXEq3tPvsM/VMZ489STLMI/AAAAAAABTss/5ecvC9SNmy0/s1600/iPhone%2BX%2B-%2BiPhone%2B7%2BFuturistic%2BConcept.jpg',
        description=('Tired of being behind the latest trends in phones?'
                     'Race to the front, by buying future tech, today!  This'
                     'iPhone model will be sure to make you the talk of the'
                     'town, with its stunning crystal-clear body and'
                     'lightning-speed apps powered by quantum computing and'
                     'nano-hamsters spinning nano-wheels!!!'),
    )
    f2 = Product(quantity=1, price=10, name='Kyle Powers First Nobel Prize', description='With the invention of his farmer robot AI technology, Kyle Powers singlehandedly solved world hunger.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/561381b103db1.jpg', userId=3, categoryId=4)
    f3 = Product(quantity=1, price=50000000, name='The Last Ice', description='When faced with the climate crisis, the world failed miserably, however due to the heroic actions of Greta Thunberg we were able to salvage this ice. Legend says she walked to Arctis barefoot to procure this ice, some say she\'s still out there watching over us, waiting for the next crisis.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/IMG2_1163-e1338677533853.jpg', userId=4, categoryId=4)
    f4 = Product(quantity=800, price=30000, name='Fully Operational Time Machine', description='With this time machine you can head back to the past or back to the future of your choosing. Just pick the year, put it in gear, and step on the gas! Make sure you have plenty of runway before you take off and be sure not to make any time-altering decisions.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/delorean-time-machine-from-back-to-the-future-photo-by-petersen-automotive-museum_100792849_h.jpg', userId=1, categoryId=4)
    f5 = Product(quantity=15, price=5000, name='The Heels Worn By The First Woman President', description='In her first inaugural address she said, "Guys, like, let\'s just stop being mean to each other!" And with those words Kim Kardashian united the nation. She has since went on to pass such legislation as the Don\'t be Rude Act and the Stop Being Poor Bill, both of which have had far reaching and questionable results.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/christian-louboutin-so-kate.jpg', userId=3, categoryId=4)
    f6 = Product(quantity=200, price=600, name='Laser Sword', description='Why shoot when you can stab, featuring the Laser Sword that can cut through anything! Fully rectractable so you can take it on the go with you. Comes with two default settings \'Light\' and \'Dark\'.',
            imgURL='https://artifactsimages.s3.us-east-2.amazonaws.com/Lightsaber%2C_silver_hilt%2C_blue_blade.png', userId=3, categoryId=4)

    products = [
        p1, p2, p3, p4, p5, p6, p7, p8, p9,
        a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
        m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12,
        f1, f2, f3, f4, f5, f6
    ]
    for product in products:
        db.session.add(product)

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
