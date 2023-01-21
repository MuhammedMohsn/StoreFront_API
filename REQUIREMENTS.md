# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index:'/products' [GET] 
- Show:'/products/:product_id' [GET] 
- Create:'/products' [POST] 
- [OPTIONAL] Top 5 most popular products:'/top_popular_products' [GET] 
- [OPTIONAL] Products by category (args: product category):'/categories/:category_id/products' [GET] 

#### Users
- Index [token required]: '/users' [GET] 
- Show [token required] :'/users/:id' [GET] 
- Create N[token required]:'/users' [POST] 

#### Orders
- Current Order by user (args: user id)[token required] :'users/:user_id/orders' [GET] 
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id:integer
- name:text
- price:integer
- [OPTIONAL] category:text

#### User
- email:text
- id:integer
- firstName:text
- lastName:text
- password:text

#### Orders
- order_id:integer
- user_id:integer [foreign key to users table]
- status of order (active or complete): text

### orders_products
-id:integer
-order_id: integer[foreign key to orders table]
-product_id :integer [foreign key to products table]
-quantity:integer