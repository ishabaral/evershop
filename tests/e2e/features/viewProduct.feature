Feature: View
    As a user
    I want to view details of products
    So that I can know if they exists

    Background:
        Given user "admin" has logged in
        And the user has navigated to the admin dashboard

    
    Scenario: view product
        When the user has browsed to the products page
        Then the user should see the products table