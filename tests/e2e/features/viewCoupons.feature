  Feature: view coupons
    As an admin
    I want to view coupons
    So that I can view all the coupons available
    
    Background: 
        Given user 'admin' has navigated to the admin login page
        And user 'admin' login with following credentials
            | email           | password |
            | admin@admin.com | a1234578 | 


    Scenario: navigation to coupons page
        When user 'admin' navigates to coupons page
        Then user 'admin' should view the coupons table