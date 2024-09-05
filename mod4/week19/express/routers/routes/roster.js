const express = require('express'); // import the express module via CommonJS syntax

const router = express.Router(); // The express module exports the ROUTER class via a property on the EXPRESS FUNCTION, which is used to create an instance of a router

const roster = {
    pg: 'Randy',
    sg: 'Anthony',
    sf: 'Noah',
    pf: 'Benjamin',
    c: 'Miles'
};

router.get('/roster', (req, res) => {
    // Send roster data
    res.json(roster);
});

router.put('/roster/:position', (req, res) => {
    // Update position with data from request body
    const position = req.params.position; // for example, pg
    const newPlayer = req.body.name; // for example, Cameron
    roster[position] = newPlayer;
    res.json(roster); // Send roster data
})

module.exports = router;
