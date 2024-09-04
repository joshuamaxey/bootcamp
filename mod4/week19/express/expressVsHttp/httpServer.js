const http = require('http'); // First we import the built-in http module, which allows us to create an HTTP server

const server = http.createServer((req, res) => { // Here we use the createServer((req, res) => {}) method. The callback function will be executed every time the server receives a request. The callback function takes two parameters: "req" (request object) and "res" (response object)
    let reqBody = ""; // Initialize an empty string to store the incoming request data

    req.on("data", (data) => { // This code listens for "data" events on the request object
        reqBody += data; // When a data packet is recieved, we append it to 'reqBody'
    });

    req.on("end", () => { // This code runs when the request ends
        if (reqBody) { // IF there is a request body (if reqBody has any data)...
            req.body = JSON.parse(reqBody); // ...then we parse the JSON data and assign it to req.body
        }

        if (req.method === 'GET' && req.url.startsWith('/users/')) { // Check to see if the request method is GET and if the URL begins with /users/
            const urlParts = req.url.split('/'); // If so, split the URL into parts at the "/"
            if (urlParts.length === 3) { // If the url split into 3 parts...
                const userId = urlParts[2]; // ...We take the third part (the userId, from index 2)
                res.statusCode = 200; // We give the response a status code of 200 (OK)
                res.setHeader('Content-Type', 'text/plain'); // We set the response header
                res.write('User details for userId: ');
                res.write(userId); // Then we send a response containing the user details
                return res.end(); // Finally, we end the response
            }
        }

        // Otherwise, if the request doesn't match the criteria in the conditional above....
        res.statusCode = 404; // Assign the response a status code of 404 (not found)
        res.setHeader('Content-Type', 'text/plain'); // Give the response the correct header type
        res.write('Not Found'); // Send a response to the server that says "not found"
        return res.end(); // Then we end our response
    });
});

const port = 5000; // Set the server to listen on port 5000
server.listen(port, () => console.log('Server is listening on port', port)); // Log a message to the console when the server starts
