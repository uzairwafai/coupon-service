# Coupon Service

This is the backend service. You'll need latest version of node to run it.

- First we need to install dependencies using:
    ```bash
    npm install
    ```

- Then, you can run the application by starting the server using
    ```bash
    npm start
    ```

Ensure you have set the `MongoDBConnectionString` environment variable pointed correctly to the mongodb instance that you shall use with the service.

### API Endpoints

- **POST `/coupons`**
    Used to create a new coupon

    **Sample payload (percentage)**
    ```json
        {
            "code" : "NEW_YEAR_15",
            "value" : 15,
            "type" : "percentage",
            "fromDate": "2026-01-17",
            "toDate" : "2026-01-21",
            "minimumCartAmount": 5000,
            "maximumDiscount": 400
        }
    ```

    **Sample payload (flat)**
    ```json
        {
            "code" : "HOLIDAY_300",
            "value" : 300,
            "type" : "flat",
            "fromDate": "2026-01-17",
            "toDate" : "2026-01-21",
            "minimumCartAmount": 2000
        }
    ```
- **GET `/coupons`**
    Used to list all existing coupons. This is a paginated API and also accepts optional pagination arguments
    - size
    - page

- **POST `/coupons/validate`**
    Used to apply/validate a coupon code against a given cart amount.

    **Sample payload**
    ```json
        {
            "couponCode" : "NEW_YEAR_15",
            "amount" : 6500
        }
    ```

    **Response signature**
    - If the coupon code is not valid, the the response will be
        ```json
            {
                "isValid" : false
            }
        ```
    - If the coupon code was applied successfully, then the applicable discount will also be returned
        ```json
            {
                "isValid" : true,
                "discount": 200
            }
        ```





