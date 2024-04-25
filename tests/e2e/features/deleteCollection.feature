  Feature: delete collection
    As an admin
    I want to delete a collection
    So that collection will be removed from collections lists
    
    Background: 
        Given user 'admin' has navigated to the admin login page
        And user 'admin' login with following credentials
            |      email      | password |
            | admin@admin.com | a1234578 | 
        And user 'admin' navigates to collections page


    Scenario: delete a collection
        When user 'admin' deletes a collection
        Then user 'admin' should view list of remaining collections