# HTTP Basics Long Practice

## Homepage

### Request

- Method: GET
- URL: localhost:5000/
- Headers: none
- Body: none

### Response

- Status Code: 200 OK
- Headers:
    - Content-Type: text/html; charset=utf-8
- Body: E-Commerce Site w/links to other pages

## Page That Doesn't Exist

### Request

- Method: GET
- URL: localhost:5000/non-existent-page/
- Headers: none
- Body: none

### Response

- Status Code: 404 Not Found
- Headers:
    - Content-Type: text/html; charset=utf-8
- Body: E-Commerce Site w/ 404 - Page Not Found

## Products List Page

### Request

- Method: GET
- URL: localhost:5000/products
- Headers: none
- Body: none

### Response

- STatus Code: 200 OK
- Headers:
    - Content-Type: text/html; charset=utf-8
- Body: Products List Page

## Product Detail Page

### Request

- Method: GET
- URL: localhost:5000/products/1
- Headers: none
- Body: none

### Response

- Status Code: 200 OK
- Headers:
    - Content-Type: text/html; charset=utf-8
- Body: Facial Cleansing Brush Product Page

## Ask For "Create New Product" Page

### Request

- Method: GET
- URL: localhost:5000/products/new
- Headers: none
- body: none

### Response

- Status Code: 200 OK
- Headers:
    - Content-Type: text/html; charset=utf-8
-Body: "Create a Product" page

## Submit a New Product

### Request

- Method: POST
- URL: http://localhost:5000/products
- Headers:
    - Content-Type: application/x-www-form-urlencoded
- Body:
    - name: TestProductFinal
    - description: Test Product Final Description
    - price: 100
    - categories: beauty

### Response

- Status Code: 302 Found (redirects to new product page)
- Headers:
    - Content-Type: text/html;charset=utf-8
- Body: New Product Page
