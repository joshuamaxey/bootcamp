const http = require("http");

const server = http.createServer((req, res) => {
    console.log("I'm in the server, I'm updated!")
});

const port = 5002;

server.listen(port, () => console.log("Server is listening on port", port));

// Now we have created a server, assigned it a port, and the server should be listening to that port number for requests

// This is a barebones server that doesn't truly send a request YET, but it does print the console.log() when we send a GET request to this server on Postman! So we know that it is live.
