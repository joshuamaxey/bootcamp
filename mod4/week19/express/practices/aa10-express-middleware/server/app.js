const express = require('express');
require('express-async-errors');
const app = express();
app.use(express.json()) // Connect the expres.json middleware that allows us to easily parse the incoming body of a request in JSON. It desierializes the JSON into a JavaScript object for you.

app.use((req, res, next) => {

  res.on("finish", () => {
    console.log(req.method, req.url, res.statusCode);
  })

  next();
});



//* Alt Method:

// app.use("/", (req, res, next) => {

//   console.log(`${req.method} ${req.url}`);

//   next();
// })

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

// app.use((err, req, res, next) => {

//   throw new Error("The requested resource couldn't be found").status(404)
// })

app.use((req, res, next) => {

  const error = new Error("The requested resource couldn't be found");

  error.statusCode = 404;

  next(error);
})

app.use((err, req, res, next) => {

  res.status(err.statusCode)
  res.json(err.message)
})

//! Alt ideal:

// app.use((err, req, res, next) => {

//   res.status(err.statusCode || 500).json({
//     message: err.message || "internal Server Error"
//   });
// });

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
