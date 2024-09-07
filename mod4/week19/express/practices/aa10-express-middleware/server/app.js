//! dotenv

const path = require('path'); // import the 'path' module
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // manually set the path to the .env file. This is necessary because the .env file is in the root directory of the project, but I usually start the server from within the server directory. Because that is the case, JS will automatically look for the .env file within the server folder. The result is that JS cannot find the .env file, which is why we have to manually specify the location of the file. We can use the code directly below if we choose to start the server from within the root directory of the project where the .env file is located.

// require('dotenv').config(); //& This will only work if we start the server from in the project's root directory, since that's where the .env file is located! If you want to load environmen

//! express

const express = require('express'); // Import the express module
const app = express(); // initialize an instance of the express application
app.use(express.json()) // Connect the expres.json middleware that allows us to easily parse the incoming body of a request in JSON. It desierializes the JSON into a JavaScript object for you.
require('express-async-errors'); // import the exrpess-async-errors module. Note that there are additional steps required in order for this to work. A typescript file must be created and the express-async-errors module must be installed using npm before the import will work. Additionally, the typescript file must be open adjacent to the app.js file in order for this module to function.

//! Router

const dogRouter = require("./routes/dogs") // import the router from the dogs.js file
app.use('/', dogRouter); // tell express to use the dogRouter


//! Catch-All Route Handler

app.use((req, res, next) => {

  // console.log(req.method, req.url)

  res.on("finish", () => { // When the request is finished...
    console.log(req.method, req.url, res.statusCode); // log the request method, request URL, and response statusCode to the console. Note that we have to use res.on("Finish", () => {}) because we are not able to know the statusCode of the response until the request is finished and the response is formulated
  })

  next();
});

//! Test Route Handlers

// For testing purposes, GET /
app.get('/', (req, res) => { // Send a GET request to the root URL
  res.json("Express server running. No content provided at root level. Please use another route."); // Send this string in JSON format, with content-type header of application/json and a status code of 200, as a response to the request
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => { // Send a POST request to the specified URL
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body); // Mirror the request body in JSON format, with a content-type header of application/json and a status code of 200 OK, as the response to the request
  next(); // Move to the next available middleware
});

//^ When we send a POST request to "/test-json" with a request body in raw/json format, we recieve a 200 OK response code and a response body that echoes the JSON request body. This means that we have successfully connected the express.json middleware on line 3.

// For testing express-async-errors
app.get('/test-error', async (req, res) => { // Send an asynchronous GET request to the specified URL
  throw new Error("Hello World!"); // throw an error with the specified text
});

//! Error Handling

//& Error generator
app.use((req, res, next) => { // initialize a new middleware function that will catch any requests that do not match any preceding route handlers or other middleware functions

  const error = new Error("The requested resource couldn't be found"); // create an error with the specified text

  error.statusCode = 404; // give our error a status code of 404

  next(error); // pass the error to the next error-handler (error-handling middleware function). Note that because we're passing in an error, this next() will NOT target regular middleware functions but instead will pass the error to the next available error-handler (middleware with 4 parameters- err, req, res, and next)
})

//& Option 1 (Do not account for NODE_ENV)
// app.use((err, req, res, next) => { // initialie an error-handler (error-handling middleware function) to catch any incoming errors that are passed through "next()" from previous middleware functions
//   res.status(err.statusCode || 500).json({ // Set the statusCode of our response to the status code of the incoming error (if there is one. If not, set the status code of the response to 500 [internal server error] by default)
//     message: err.message || "Something went wrong", // Set the message of the response to the message of the incoming error (if there is one. If not, set the message to the specified string by default)
//     statusCode: err.statusCode, // I think this line is redundant

//     stack: err.stack // Set the 'stack' of the response to the stack trace of the error
//   })
// })

//& Option 2 (Account for NODE_ENV)
// app.use((err, req, res, next) => { // initialie an error-handler (error-handling middleware function) to catch any incoming errors that are passed through "next()" from previous middleware functions

//   const response = { // create a 'response' object
//     message: err.message || "Something went wrong", // set the message to the message of the incoming error (if it has one. If not, set to "Something went wrong" by default)
//     statusCode: err.statusCode || 500 // Set the statusCode of our response to the statusCode of the incoming error (if it has one. If not, set to 500 [internal server error] by default)
//   }

//   if (process.env.NODE_ENV !== 'production') { // Check the .env file to see if the NODE_ENV (node environment) is set to "production". If it IS, do nothing.
//     response.stack = err.stack; // If it is NOT set to "production", set the "stack" of the response to the stack trace of the error.
//   }

//   res.json(response); // Send our response in Json format, with a content-type header of application/json
// })

//& Phase 2 Error Handler
// app.use((err, req, res, next) => { // Set up another error-handling middleware for any errors that aren't caught by the first function

//   res.status(err.statusCode || 500); // set the status code of the response to the status code of the error (if there is one. If not, set to 500 [internal server error] by default)
//   res.json(err.message || "Something went wrong"); // Set the message/body of the response to the message of the incoming error (if there is one. If not, set to the specified string by default)
// })

//! Server Start

const port = process.env.PORT || 8000; // Set the port to the PORT that is specified in the .emv file. If there is no port specified in the .emv file, set the port to 8000 by default
app.listen(port, () => console.log('Server is listening on port', port)); // Start the server and tell it to listen on the specified port. Log the specified message to the console to confirm that the server is active and listening.
