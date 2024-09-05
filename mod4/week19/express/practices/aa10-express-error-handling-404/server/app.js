const express = require('express'); // Import the express module using CommonJS syntax
const app = express(); // initialize an instance of the express application and assign it to the variable "app"

app.get('/', (req, res) => { // Define a route handler for GET requests to the route URL of "/"
  res.send('GET / This is the root URL'); // Upon navigating to the root URL, send a message "GET / This is the root URL"
});

app.get('/*', (req, res, next) => { // Define another route handler for GET requests to any URL beyond the root URL
  let err = new Error("Sorry, the requested resource couldn't be found"); // Create a new error with the specified message and save it to a variable "err"
  err.status = 404 // manually set the status code of the "err" to 404 not found per instructions in the README
  next(err); // Then pass the err into the next function. This will cause the next error-handling middleware to pick up this error.
});

app.use((err, req, res, next) => {
  console.error(err); // Log the error to the server console

  const statusCode = err.status || 500
  res.status(statusCode); // Extract the statusCode property on the error and set it as the status code for the response. If there is no statusCode property, set the status code of the response to a default of 500.

  res.json({ // send a JSON response containing the error message and status code
    message: err.message,
    statusCode: statusCode
  });
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
