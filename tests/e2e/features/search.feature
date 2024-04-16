Feature: Search
    As a user
    I want to find details of a product or customer
    So that I can know if they exists

    Background:
        Given user "admin" has logged in
        And the user has navigated to the admin panel dashboard


    Scenario: try to make a search
        When the user searches for product "gown"
        Then the result should be empty


    Scenario Outline: search a product
        When the user searches for product "<product>"
        Then the user should see results for the product "<product>"
        Examples:
            | product |
            | sweater | 
            | jeans   |

    
    Scenario Outline: search a customer
        When the user searches for customer "<customer>"
        Then the user should see results for the customer "<customer>"
        Examples:
            | customer |
            | alice    | 
            | john     |