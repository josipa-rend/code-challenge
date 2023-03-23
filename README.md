# code-challenge app

### Running the app

`npm install`<br>
`npm start`

### Running the tests
 
`npm start`<br>
`npm tests`

### ***** Design *****

- this is simple backend app, running on port 3000 (fe: https://github.com/josipa-rend/dh-app)
- simple node server written in JavaScript

-  uses `express` to define routes
- tests for `/encode` endpoint written using `jest` and `supertest` (`encode.test.js`)

- function encoder defined in encode.js : the current implementation will not tolerate caps on input string, example:
 aaaAAAssf -> a3A3s2f1
 - to change this behavior the line https://github.com/josipa-rend/code-challenge/blob/main/encode.js#L18 should be uncommented and the defined variable should be used in the rest of the method instead of `input` variable
 - in `app.js` default headers are included to bypass the CORS policy
 

- tested using node v14.21.3
