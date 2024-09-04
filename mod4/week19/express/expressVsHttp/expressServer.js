//! RECALL That in order to use express, you need to use "npm init -y" in the root directory to initialie NPM
//! After that, you need to "npm install express"
//! THEN you can use express. Otherwise 'express' will return undefined.

const express = require('express'); // Import the Express module. Express is a web application framework for Node.js

const app = express(); // Here we create an instance of the Express application. This instance represents our web application and provides methods to define routes, middleware, and other functionality for our app.

app.use(express.json()); // Add middleware to the Express app that will parse incoming JSON request bodies. This means that any JSON data send in any request will automatically be parsed and made available in req.body.

app.get('/users/:userId', (req, res) => { // Define a RESTFUL route that listens for GET requests to URLs matching "/users/:userId". The ":userId" part is a route parameter that will capture the value in that part of the URL and make it available in req.params.

    const userId = req.params.userId; // Extract the userId from the request parameters
    res.status(200).send(`User details for userId: ${userId}`); // Send a response with a status code of 200 and a message which includes the user ID.
})

const port = 5000; // Set the server to listen on port 5000
app.listen(port, () => console.log(`Server is listening on port ${port}`)); // CREATES THE SERVER and sends a message to indicate that the server has started.
