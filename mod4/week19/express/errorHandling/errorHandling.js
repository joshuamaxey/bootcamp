//! Defining custom error handlers (error handling middleware) in Express

//^ Express middleware functions define three parameters: req, res, next

//^ Route handlers define two OR three parameters: req, res, next (optional)

//^ Error handlers define four parameters: err, req, res, next

const express = require("express"); // Import the express module using CommonJS syntax

const app = express(); // Initialize an instance of the express application and assign it to the variable "app"

app.get('/', (req, res) => { // Set up a route handler for GET requests to the root URL of "/"
    res.render('index', { title: 'Home' }); // Render a view called 'index' and pass in an object with a title property set to "Home"
});

//^ Notice that this code throws an error and displays the stack trace when we navigate to "/" because the res.render() method is trying to render a view called "index", but we haven't set up the view engine and the "index" view file doesn't exist.

app.get('/throw-error', (req, res) => { // Set up a route handler for GET requests to the URL of "/throw-error"
    throw new Error("An error occurred!"); // When this route is accessed, throw an error with the message "An error occurred!"
});

app.use((err, req, res, next) => { // Set up a custom error-handler (error-handling middleware). When an error is thrown in any route, this middleware catches it. It logs the error to the console and sends a response to the client with the custom error message.
    console.error(err); // print the error to the console
    res.status(err.status || 500) // print the status code. If it is not explicitly set, show status code 500
    res.send('An error occurred! Please check the url, or wait a few minutes and try again'); // Show this custom error message on the page
})

//^ Also notice that our custome error handler catches and handles ANY errors that occur during the processing of requests, overriding both of the errors thrown by the first two route handlers.

//^ This error-handler (error-handling middleware) is defined AFTER our routes, so it catches any errors thrown by those routes.

//^ Whenever an error is thrown by any of our route handlers, it passes the error to THIS middleware. THe middleware logs the error to the console and sends a custome error messge to the client, overriding the default behavior of showing the stack trace.

//* Note that this is particularly useful (not showing the stack trace) when we're working in production environments where we do not wnat to expose internal error details to users.

//! We can define multiple custom error handlers. Lets say that we want to define an error handler that will display the stack trace if we are NOT in a production environemnt

app.use((err, req, res, next) => { // Define an error handler (error-handling middleware function).
    const isProduction = process.env.NODE_ENV === 'production'; // Check if the application is running in a production environemnt by comparing NODE_ENV to the string 'production' and then assigns the result (a boolean, true or false) to the variable 'isProduction'
    res.render('error', { // This line renders an error view using the res.render() method. It passes in an object with tree properties to view:
        title: 'Server Error', // A string, "Server Error"
        message: isProduction ? null : err.message, // If the application is in production (isProduction is TRUE), this is et to null. OTherwise it is set to the error message (err.message)
        stack: isProduction ? null : err.stack // If the application is in production (isProduction is TRUE), this is also set to null. Otherwise it is set to the error stack trace.
    })
})

//^ This setup ensures that detailed error information is only shown in non-production environments. 

const port = 8081; // Set the application to listen on port 8081
app.listen(port, () => console.log(`The server is listening on port ${port}`)); // When the server starts, log a message to the console indicating that it is listening on the specified port.
