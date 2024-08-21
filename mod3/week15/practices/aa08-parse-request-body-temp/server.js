const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http'); // import server module

server = http.createServer((req, res) => { // create the server using .createServer method with req & res as arguments

    // console.log("Successfully started the server on port 5000")

    console.log(req.method, req.url);

    let reqBody = '';

    req.on('data', (data) => {

        reqBody += data;
    });

    req.on('end', () => {

        req.body = parseBody(reqBody);
        // console.log(reqBody);

        sendFormPage(req, res);
    });

    // parseBody(reqBody);
})

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port)); // tell the server to listen to requests through our chosen port.

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
