// Series of tests that account for all the different possible responses from calling the API e.g. HTTP 200, 401, etc. and ensures the component renders as indicated.
// Right now I don't know which are the main ones and which others to shuffle into a more general catch-all. Currently going by: https://www.restapitutorial.com/httpstatuscodes.html

// Response Status: 200 (OK) - Test that...it renders something? 

// Response Status: 204 (No content)
// Return "Error: There is no content to display"

// Response Status: 401 (Unauthorised) - Returns { error: 'Couldn\'t authenticate you' }
// Return "Error: Your details couldn't be authenticated."

// Response Status: 500 (Internal Server Error)
// Return "Error: There is a problem with the API making it inaccessible right now."