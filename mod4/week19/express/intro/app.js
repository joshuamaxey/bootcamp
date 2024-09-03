//! Express is a backend node.js framework written in JavaScript that hanldes a lot of the boilerplate code required for building servers with JavaScript.

// Before we can use express, we have to install it using NPM.

// And before we can use Express to create a web application, we need to initialie npm //* ("npm init -y")

// After you run npm init, run //* ("npm install express@^4.0.0")

const express = require("express"); //^ Here we import the express module

const app = express(); //^ This creates an instance of an express server by calling the express() function

// The "app" variable holds a reference to an Express Application (app) object. We will call methods on the app object as we build our web application.

const port = 5000; //^ Here we create the variable that will tell our server that it is supposed to listen on port 5000

app.listen(port, () => console.log(`Server is listening on port ${port}`)); //^ Now we actually tell the server to listen

// Now we can tell our server to listen on port 5000 using the terminal command //* "node app.js"

// At this point, starting our server in the browser and then navigating to "localhost:5000" opens a page that says "Cannot GET /" because we haven't added any route handlers yet

app.get("/", (req, res) => { //^ Now we create a route handler for a GET request to our server
    // res.send("Hello from the app!");
    res.send("Hi from the app!")
});

// Now we can restart our server using ctrl+C and then restart it using node app.js so that our changes will take place.

// Now, nagivating to localhost:5000 opens a page that says "Hello from the app!" instead of "Cannot GET /"

//! Now lets install nodemon so that we don't have to close and restart our server to reflect changes that we make to our server

// In the terminal, run //* "npm install nodemon"

// To confirm that nodemon has been installed as a dependency in this directory, you can check your package.json file.

// Now lets add a new command to our "scripts" object in our package.json file that will allow us to easily run nodemon. Add this to your package.json file within the "scripts" object: //* "start": "nodemon app.js",

// Now if we run "npm start" we see that nodemon is now starting, running, and monitoring our server. Every time that we make a change to this file, the server automatically stops and restarts. Now if we want to see the changes that we make reflected in the browser, we only need to reload the browser window. There is no need to stop and restart our server here in the terminal (nodemon does this for us).


