Feature: Upload
    As an admin user
    I want to upload a product
    So that I can sell

    Background:
        Given user "admin" has logged in
        And the user has navigated to the admin dashboard
        And the user has browsed to the add new product page


    Scenario: uploading a valid file
        When the user uploads file "testFile1.jpeg"
        Then the user should see the preview of file "testFile1.jpeg"
        And the user should see the next file upload option 
        

    Scenario: uploading a malformed file
        And the user uploads file "testFile2.jpeg"
        Then the user should see a warning 
        But the user should not see the preview of file "testFile2.jpeg"