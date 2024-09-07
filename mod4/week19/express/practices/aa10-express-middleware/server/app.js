//! dotenv

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// require('dotenv').config(); //& This will only work if we start the server from in the project's root directory, since that's where the .env file is located! If you want to load environmen

//! express

const express = require('express');
const app = express();
app.use(express.json()) // Connect the expres.json middleware that allows us to easily parse the incoming body of a request in JSON. It desierializes the JSON into a JavaScript object for you.

//! Router

const dogRouter = require("./routes/dogs")
app.use('/', dogRouter);

require('express-async-errors');

//! Catch-All Route Handler

app.use((req, res, next) => {

  // console.log(req.method, req.url)

  res.on("finish", () => {
    console.log(req.method, req.url, res.statusCode);
  })

  next();
});

//! Test Route Handlers

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

//^ When we send a POST request to "/test-json" with a request body in raw/json format, we recieve a 200 OK response code and a response body that echoes the JSON request body. This means that we have successfully connected the express.json middleware on line 3.

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

//! Error Handling

app.use((req, res, next) => {

  const error = new Error("The requested resource couldn't be found");

  error.statusCode = 404;

  next(error);
})

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong",
    statusCode: err.statusCode,
    stack: err.stack
  })
})

app.use((err, req, res, next) => {

  res.status(err.statusCode)
  res.json(err.message)
})

//! Server Start

const port = process.env.PORT || 8000
app.listen(port, () => console.log('Server is listening on port', port));
