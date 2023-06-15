# Product Inventory

### A Thinkful Assesment

This is a backend server for viewing and editing product inventory for a fictional store.

Users can get product inventory and statistics, as well as out-of-stock products; 
create, update, and delete suppliers for said products; 
get product categories

Deployed server can be found [here](https://product-inventory-server.onrender.com/).

## Usage

Exact details for proper request formatting is not included as the server is still in development and not intended for full release

### Available Commands

| HTTP verb	| Path	| Description |
|---|---|---|
| GET	| /products |	Retrieve a list of all products
| GET	| /products/:productId |	Retrieve a product by ID
| GET	| /products/total-weight-by-product |	Get combined weight of all products in inventory sorted by product
| GET |	/products/price-summary |	Retrieve a list average, min, and max price information for all products grouped by supplier
| GET	| /products/out-of-stock-count |	Retrieves a list of all out of stock products
| PUT |	/suppliers/:supplierId |	Update a supplier by ID
| DELETE | /suppliers/:supplierId | Deletes a supplier by ID
| POST | /suppliers | Creates a new supplier
| GET | /categories | Retrieves a list of all categories of products
| GET | /categories/:categoryId | Retrieves an individual category


## Implementation

This server was created with Node.js, Express, and Knex and is deployed by [Render.com](https://render.com/)

The database is hosted by [ElephantSQL](https://www.elephantsql.com/) which is a PostgreSQL server hosting site

Currently, only some routes are implimented, so there's no way to view suppliers and no way to update info for the categories or products

## Installation

1. Fork and Clone repository
2. Open terminal to local repo
3. run ```npm install``` and ```npm start```
4. Requests can be made to http://localhost:5000/
