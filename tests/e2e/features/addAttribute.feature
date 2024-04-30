  Feature: add attribute
    As an admin
    I want to add new attribute
    So that I can have more attributes for products
    
    Background: 
        Given user 'admin' has navigated to the admin login page
        And user 'admin' login with following credentials
            | email           | password |
            | admin@admin.com | a1234578 | 
        And user 'admin' navigates to attributes page


    Scenario Outline: create new attribute with different types
        When user 'admin' creates new attribute with following details
            | name   | code   | type   | order   |
            | <name> | <code> | <type> | <order> |

        Then user 'admin' should be able to edit attribute with name '<name>'
        Examples:
            | name            | code  | type        | order |
            | Test Attribute1 | test1 | Text        | 0     |
            | Test Attribute2 | test2 | Select      | 1     |
            | Test Attribute3 | test3 | Multiselect | 0     |
            | Test Attribute4 | test4 | Textarea    | 1     |