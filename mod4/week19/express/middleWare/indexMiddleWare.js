const express = require("express"); // Import the Express module. Express is a web framework for Node.js which allows us to create a web server and handle HTTP requests and responses

const app = express(); // Here we initialize an instance of the Express application. This "app" object is used to define routes and middleware for our web server. Note that the server does not actually start until we call app.listen() at the bottom of our code

//! What is Middleware?

//^ Middleware in Express.js is a function that has access to:
    // 1. The request object (req)
    // 2. The response object (res)
    // 3. The NEXT middleware function in the application's request-response cycle.

//^ Middleware functions can perform tasks such as:
    // 1. Execute code
    // 2. Modifying the request and response objects
    // 3. Ending the request-response cycle
    // 4. Calling the next middleware function in the stack using next();

//^ The following function is a kind of APPLICATION-LEVEL MIDDLEWARE.
    // Application-level middleware is bound to an instance of the "app" object using app.use() (like below) or app.METHOD()

//^ In the simple example below, we use application-level middleware to log the current time for every request recieved by the server.

app.use((req, res, next) => { // Here we add a middleware function to our application. Middleware functions are executed in the order that hey are added.
    console.log('Time:', Date.now()) // This specific middleware logs the current time for every incoming request
    next(); // Then we call calls next(), which passes control to the next middleware function in the stack.
})

app.get('/', (req, res) => { // Then we define a route handler for GET requests to the root URL of "/".
    res.send("Hello World!"); // When a GET request is made to this URL, the server responds with "Hello World"
});

const port = 5000; // Here we set the port number on which the server will listen for incoming requests

app.listen(port, () => { // Finally, we start the server and make it listen for incoming requests on the specified port.
    console.log(`Server is listening on port ${port}`) // When the server starts, it logs a message to the console indicating that it is listening on that port.
})
