# from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    u1 = User(username='CarmenSandiego', email='carmen@sandiego.com', password='123123')
    u2 = User(username='MrsFrizzle', email='frizzle@magicschoolbus.com', password='123123')
    u3 = User(username='MartyMcFly', email='marty@mcfly.com', password='123123')
    u4 = User(username='DrEmmetBrown', email='emmet@brown.com', password='123123')
    u5 = User(username='TheProtagonist', email='protagonist@tennet.com', password='123123')
    u6 = User(username='MrCage', email='nation@treasure.com', password='123123')
    
    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
# RESTART IDENTITY - Restarts the incrementing PK 

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
