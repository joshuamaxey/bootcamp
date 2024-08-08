const http = require('http'); // Here we import Node.js's built-in http package.

const server = http.createServer((req, res) => {
    // Here we call the createServer method on our import of Node.js's built-in http package.
    // Right now, the server isn't connected to our network and isn't listening for incoming requests or sending outgoing responses.
})

const port = 5001; // Here we choose the port number 5001 and assign it to a variable 'port'

server.listen(port, () => console.log('Server is listening on port', port)); // Here we invoke the .listen method on our new server, passing in two arguments. The first argument is the port, and the second is a callback function.

// The callback function runs once the server successfully connects to the port. In this case, we log a message to the console which confirms that the server is connected to our chosen port and listening for requests.

//^ Now when we run 'node server.js' in the terminal, we will see the message "Server is listening on port 5001," indicating that our server has successfully connected to the port and is now listening for requests


