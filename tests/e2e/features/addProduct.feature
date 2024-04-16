Feature: Add new product
    As an admin user
    I want to add new product
    So that I can sell

    Background:
        Given user "admin" has logged in
        And the user has navigated to the admin dashboard
        And the user has browsed to the add new product page


    Scenario: uploading product
        When the user adds a product with the following details
            | Name     | SKU       | Price | Weight | Category | Tax Class       | Description        | Media          | Url key | Meta title | Meta keywords | Meta description | Quantity | Color | Size |
            | One-sie  | XYZ-98765 | 50    | 30     | Kids     | Taxable Goods   | One-sie for babies | testFile1.jpeg | one-sie | one-sie    | one-sie       | one-sie          | 60       | White | SM   |
        Then the user should see a success message
        And the user should see the added product "One-sie" in products page