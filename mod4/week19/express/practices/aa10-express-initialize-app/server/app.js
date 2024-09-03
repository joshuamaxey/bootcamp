const express = require("express"); // Import the express module using commonJS syntax

const app = express(); // Create an instance of an express server by calling the express() funciton

const port = 5000; // Create the variable that will tell our server which port to listen on (in this case, 5000)

app.listen(port, () => console.log(`Server is listening on port ${port}`)); // Tell our server to listen to the specified port and implement a callback that will confirm to us that the server is listening

app.get("/status", (req, res) => {
    res.send("The server is alive!"); // Set up a route handler for the basic GET request to our server. Now when we go to the address "localhost:5000/status" we will see "The server is alive!" on the page
});
