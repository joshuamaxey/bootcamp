const http = require('http');
const fs = require("fs");

const responseBody = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/static/css/application.css" rel="stylesheet" />
  <title>Example</title>
</head>

<body>
  <h1>Hello World!</h1>
  <img src="/static/images/dog.jpg" />
</body>

</html>
`;

const server = http.createServer((req, res) => {
  // Your code here
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
