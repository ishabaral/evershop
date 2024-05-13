Feature: Search
    As a user
    I want to search a product
    So that I can manage the product

    Background:
        Given user "admin" has logged in
        And the user has navigated to the admin dashboard


    Scenario: try to search for a product
        When the user searches for product "gown"
        Then the result should be empty


    Scenario Outline: search a product
        When the user searches for product "<product>"
        Then the user should see results for the product "<product>"
        Examples:
            | product |
            | sweater | 
            | jeans   |