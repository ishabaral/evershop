  Feature: add collection
    As an admin
    I want to add new collection
    So that I can add products to it
    
    Background: 
        Given user 'admin' has navigated to the admin login page
        And user 'admin' login with following credentials
            |    email        | password |
            | admin@admin.com | a1234578 | 
        And user 'admin' navigates to collections page


    Scenario Outline: create new collection
        When user 'admin' creates new collection with following details
            |  name  |  uniqueID  |  description  |
            | <name> | <uniqueID> | <description> |
        Then user 'admin' should be able to add products to the collection
        Examples:
            |      name         | uniqueID  |        description             |
            | Jeans Collection  | jeans123  | Jeans Collection Description   |
            | Shirts Collection | shirts123 | Shirts Collection Description  | 
