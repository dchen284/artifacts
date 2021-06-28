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
* Saving cart data in the database.  This option would allow users to access the same cart data across different devices.
* Saving cart data in local storage.  This option would allow updating the cart to be less reliant on fetching from a database, making updating the cart faster.
After discussion, the team decided to save cart data to the database.

#### Shopping Cart Logic
The team needed to decide on logic on the shopping cart:
* What cases could occur such that the shopping cart contains invalid items?
* How would the above cases be handled?
After discussion, the team decided that on checkout, a back-end check would be made against the database.  Two key cases were 1) if a product listing had been deleted, and 2) if the product inventory became lower than the customer's requested quantity.
```py
    try:
        for item in cart_items:
            curr_product = Product.query.get(item['productId'])
            if curr_product is None:
                errors.append('Product no longer exists')
            elif item['quantity'] > curr_product.quantity:
                errors.append('Not enough inventory in store')
            list_of_data.append(
                (curr_product,
                 item['quantity'] if curr_product is not None else None)
            )
            order.products.append(curr_product)
        # process order after for loop
        if errors:
            raise ValueError(errors)
        db.session.add(order)

        # update quantity of each product
        for data in list_of_data:
            data[0].quantity -= data[1]
            db.session.add(data[0])

        # clear shopping cart
        shopping_cart_items = ShoppingCartItem.query.filter(ShoppingCartItem.userId == userId).all()

        for item in shopping_cart_items:
            db.session.delete(item)

        db.session.commit()
        return jsonify([])
    except ValueError:
        return jsonify(errors)
```

#### Differences between Development and Production Environments: Routes
The team had trouble with certain routes, that would function in the development environment, but not the production environment.  With the help of instructional staff, it was found that in the development environment, Flask would redirect "/route" to "/route/" via a HTTP request.  In the production environment, Flask's HTTP request would not be allowed as HTTPS is required.  This issue was resolved by specifying the correct strings for routes.

#### Differences between Development and Production Environments: Images
The team had trouble showing the site logo in the production environment, while there were no issues in the development environment.  With the help of instructional staff, it was found that the logo image was best imported into a component.  Link to outside resource for the syntax: https://create-react-app.dev/docs/adding-images-fonts-and-files/

## Future Features
- Theme toggle that users can customize
- User orders summary page
- Wallet/credits
- Tags and filters for product listings
- Allowing the shopping cart to be used without being logged in; merge these items with the user's shopping cart after logging in
