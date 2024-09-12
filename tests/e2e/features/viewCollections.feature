
  Feature: view collections
    As an admin
    I want to view collections
    So that I can add products to it
    
    Background: 
        Given user 'admin' has navigated to the admin login page
        And user 'admin' login with following credentials
            | email           | password |
            | admin@admin.com | a1234578 | 


    Scenario: navigation to collections page
        When user 'admin' navigates to collections page
        Then user 'admin' should view the collections table
