
# Welcome to SnackStore


> This API has been developed using EXPRESS JS

Steps

 - Clone the repo
 - Install node packages globally or you can use the command `npm run global-snack`
	 - **sequelize**  `npm install -g sequelize`
	 - **sequelize-cli**   `npm install -g sequelize-cli`
	 - **pg**  `npm install -g pg`
 - Run `npm install #to install dependencies used in the project`

# DB CONFIG

Run

    sequelize db:create #to create the database
	sequelize db:migration #to create table schema
	sequelize db:seed:all #to populate the database

or just run

    npm run db-snack

# Test user

> **Admin**
> email: admin@foo.com
> password: bar2018
> **User**
> email: user@bar.com
> password: foo2018


# REST Routes

All routes use the prefix **api/v1/**

|**Verb**        |**Routes**                          |**Actions**                         |**Params**                         |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|Get|/products            |Return a list with all product ordered by name ASC            | -- |
|Get |/products/:order          |Return a list with all product ordered by name           |   order: ASC or DESC          |
|Get |/products/:order/:orderColumn         |Return a list with all product ordered by specific column         |   order: ASC or DESC, orderColumn: name, like, price, stock          |
|Get |/products/:id          |Return a product by id           |   id          |
|Get |/productByName/:name          |Return a list with all product that match with name         |   name: complete or part of name  product          |
|Post |/users/sign_in          |Login as a user           |   email, password          |
|Post |/users/sign_up          |Sign up as a user          |   email, password, first name, last name          |
|Get |/products/:order          |Return a list with all product ordered by name           |   order: ASC or DESC          |
|Get |/products/:order          |Return a list with all product ordered by name           |   order: ASC or DESC          |
|Get |/products/:order          |Return a list with all product ordered by name           |   order: ASC or DESC          |
|Get |/products/:order          |Return a list with all product ordered by name           |   order: ASC or DESC          |

Logged user routes, prefix **api/v1/users/**
|**Verb**        |**Routes**                          |**Actions**                         |**Params**                         |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|Post|/products/:id/like           |Liking a product           | id: product id |
|Get|/purchase_orders           |Return a list with all orders ordered by last update        | -- |
|Get|/purchase_orders/:order         |Return a list with all orders with custom order        | order |
|Get|/purchase_order/:id          |Return a  order       | id |
|Post|/purchase_orders/:id/completed          |Change status order to completed     | id |
|Post|/purchase_orders/:id/canceled         |Change status order to cancele       | id |
|Post|/line_items/         |Create a line item       | product_id, quantity |
|Delete|/line_items/:id      |Remove a line item       | product_id, quantity |

Admin user routes, prefix **api/v1/admin/**
|**Verb**        |**Routes**                          |**Actions**                         |**Params**                         |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|Post|/products/         |Create a product           | id |
|Delete|/products/:id        |delete a product           | id |
|Put|/products/:id       |Update a product           | id |
