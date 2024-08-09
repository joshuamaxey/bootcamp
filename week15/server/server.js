//! Here we will create a node.js server using node's built-in http package. We will connect the server to a port so that it can accept requests from a client through that port. Then we will print the http Request and Response objects to the console using this basic server and identity the properties of these objects that are relevant to us.

const http = require('http'); // Here we import Node.js's built-in http package.

const server = http.createServer((req, res) => {
    // Here we call the createServer method on our import of Node.js's built-in http package.
    // Right now, the server isn't connected to our network and isn't listening for incoming requests or sending outgoing responses.

    // console.log(req); // When a server gets a request, http creates a 'Request' object that holds methods and properties for interacting with components of the request. Here, we add this console.log() to our createServer function so that the 'Request' object will print to the console for us to see when we make a request to the server.

    //^ There are a few properties of this Request object that we will be using:

    //* method: - value is a string of the method of the request
    //* url: - value is a string of the url path of the request
    //* headers: - value is an object with key-value pairs for header names and valus
    //* on: - Method that listens for an event on the request and runs a callback function when that event is triggered.

    //^ The method, url, and headers propeties are used to identify the route of the request and formulate a response based on that route. The 'on' method will be used to parse the body of the request.

    // console.log(res); // http also creates a Response object for every request made to the server. This object also has properties and methods to interact and produce the components of a response. Here, we add this console.log() so that the Response object will print to the console for us when we make a request to the server.

    //^ There are a few properties of the Response object that we will be using:

    //* statusCode: - value is the status code of the response
    //* setHeader: - method that assigns a value to a header name
    //* write: - method that allows you to add to the body of a request
    //* end: - method that allows you to add to the body of a request AND send a response

    //! Below, we will log the

    console.log(req.method, req.url);

    //& To see the 'Request' and/or 'Response' objects, make a request to the server (in Postman, etc). The object(s) will then print to the console.

    //! The body of a request comes in the form of a readable stream of data packets which must be added together in order to produce the entire request body as a single string. Below, we will use the req.on method to listen for 'data' events. When a data packet is received, the 'data' event is triggered. Then we add the contents of the current data packet to the compiled content of previous packets that have already been received (like adding to a running total).

    let reqBody = '';

    req.on('data', (data) => { // The req.on method listens for 'data' events.

        reqBody += data; // Here, we add the contents of each data packet to the content that is compiled from the data packets that have already been received.

    });

    req.on('end', () => { // The 'end' event on the request object will be triggered once the server has receive the entire request body.

        // console.log(reqBody); // When the 'end' event is triggered, we will log the body of the request to the console.

        // sendFormPage(req, res);

    });

    //! Now that we can receive the body of the request and be able to read it, will need to parse the body. The parsing method we use will depend on content-type header of the request. When the Content-Type of the request is "application/x-www-form-urlencoded," the request body will be a string. This string will contain the names and values of HTML form inputs separated by a &. It will also have a = between keys and values. Like this:

    //^ name=Fido&color=black&age=1&description=Hello+World%21

    // To convert these key-value pairs from this encoded string into an object, you need to parse the string into a JavaScript object. Parsing involves the following five steps:

    //* 1. Separate the key-value paris in the string from one another by separating each string at the "&"

    //* 2. Separate the key from the value by separating the key-value pairs at the "="

    //* 3. Replace the "+" symbols with spaces " "

    //* 4. Decode the values from Percent Encoding

        //^ decodeURIComponent(encodedURI)

    //* 5. Convert key-value pairs into an object.
})

const port = 5001; // Here we choose the port number 5001 and assign it to a variable 'port'

server.listen(port, () => console.log('Server is listening on port', port)); // Here we invoke the .listen method on our new server, passing in two arguments. The first argument is the port, and the second is a callback function.

// The callback function runs once the server successfully connects to the port. In this case, we log a message to the console which confirms that the server is connected to our chosen port and listening for requests.

//^ Now when we run 'node server.js' in the terminal, we will see the message "Server is listening on port 5001," indicating that our server has successfully connected to the port and is now listening for requests
