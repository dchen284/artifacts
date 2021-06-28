## Welcome To Artifacts
**Artifacts** is an e-commerce site, themed around time travelers selling artifacts from across time. 

## Live Site
https://artifacts-app.herokuapp.com/
![Home Page](https://i.imgur.com/uL7kYdV.png)
 
## Technologies Used
-   PostgreSQL
-   Python
-   Flask
-   SQLAlchemy
-   Alembic
-   WTForms
-   React
-   JavaScript
-   AWS S3
-   Redux
-   Heroku

## Documentation
[Database Schema](https://github.com/dchen284/artifacts/wiki/Database-Schema)

[Feature List](https://github.com/dchen284/artifacts/wiki/Feature-List)

[Routes](https://github.com/dchen284/artifacts/wiki/Routes)

[User Stories](https://github.com/dchen284/artifacts/wiki/User-Stories)

[Wireframes](https://github.com/dchen284/artifacts/wiki/Wireframes)

## Features

#### Product Listings
![Products Listing](https://i.imgur.com/nl6x8Ox.gif)
- Products are divided into categories (named after historical eras).  
- Users can click products to go to individual product pages for more detail on the product and reviews.  
- Once logged in, product listings can be created using "Add Listing" under the User Profile dropdown menu.
- Once logged in, product listings can be updated/deleted under the User Profile dropdown menu.
- Deleting a product listing will cascade-delete the connected reviews and entries in shopping carts.
- Once logged in, on an individual product page, users can add the product to the shopping cart, specifying the desired quantity.

#### Reviews
![Reviews](https://i.imgur.com/UOImitv.gif)
- On each product page, any user can view reviews for that product.
- Logged in users can create a new review, or update/delete a review belonging to that user.

#### Search
- The search bar can be used to search by the product name.  If the full category name (Prehistoric, Antiquities, Modern, Future) is entered, all products for that category are shown.

### Shopping Cart
![Cart](https://i.imgur.com/zCQt9XY.png)
- Once logged in, users can access the shopping cart, and add products to the shopping cart, specifying the desired quantity.
- On the shopping cart, users can update the quantity of each item, or delete the item from the cart.
- Front-end validations prevent entering a quantity of each item to be 0 or less, or exceed the existing inventory.
- Clicking checkout goes to a confirmation modal.
- On confirm, back-end validations are done to check for edge cases:
  1) If a product listing in the shopping cart has since been deleted from the database. 
  2) If other users have depleted the inventory of an item before checkout, making the user's quantity invalid.

## Database Schema

![Alt text](https://github.com/dchen284/artifacts/blob/main/references/db-diagram.png "Database Diagram")

## Challenges

#### Adding An Item to Shopping Cart, When Cart Already Contains That Item
The team needed to decide on logic for adding an item to the cart, if the cart already contained that item
* Would the new quantity overwrite the existing quantity?
* Would the new quantity be added to the existing quantity?
After spirited debate, and consulting how Amazon handles this case, it was decided that adding to the existing quantity would be the implemented logic.
```py
    # If the item does not exist, add it to the database
    if cart_item is None:
        item = ShoppingCartItem()
        item.userId = data['userId']
        item.productId = data['productId']
        item.quantity = data['quantity']

        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    # If item does exist update quantity
    else:
        cart_item.quantity += data['quantity']
        db.session.add(cart_item)
        db.session.commit()
        return cart_item.to_dict()
```
#### Saving Cart Data
The team needed to decide on where to save cart data.  With help from the instructional staff, the team discussed choices:
* Saving cart data in the database.
** The advantage would be that users can access the same cart data across different devices.
**
* Saving cart data in local storage.
** The advantage and disadvantage were opposite to saving cart data in the database. 
After discussion, the group opted to 

#### Shopping Cart Logic
The team needed to decide on logic on the shopping cart
* What cases could occur such that the shopping cart contains invalid items?
* How would the above cases be handled?

#### Differences between Development and Production Environments: Routes

#### Differences between Development and Production Environments: Images

## Future Features
- Theme toggle that users can customize
- User orders summary page
- Wallet/credits
- Tags and filters for product listings
- Allowing the shopping cart to be used without being logged in; merge these items with the user's shopping cart after logging in
