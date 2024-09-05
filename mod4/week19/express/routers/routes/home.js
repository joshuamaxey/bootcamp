const express = require('express'); // import the express module using CommonJS syntax

const router = express.Router(); // THe express module exports the Router class via a property on the express function, which is used to create an instance of a router

//! Prior to this point, we have defined routes using an instance of the Express Application (app) object. We follow the same procedure with an instance of the ROUTER instance. A router can be thought of as a mini-app.

//^ Note that the Express Application (app) object and the Express Router (router) object also handle middlewares in the same way.

// Use the router.get() method to define a collcolection of routes for a sports team including "Home", "Schedule", and "ROSTER" pages.

// Starting with home.js...

router.get('/home', (req, res) => {
    res.send('Our team homepage');
})

module.exports = router;
