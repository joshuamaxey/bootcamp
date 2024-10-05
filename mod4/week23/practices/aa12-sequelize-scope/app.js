// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import Op to perform comparison operations in WHERE clauses - DO NOT MODIFY
const { Op } = require("sequelize");

// Import the models used in these routes - DO NOT MODIFY
const { Store, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1: Apply a default scope onto the searches
// List of all the instruments in the database - DO NOT MODIFY
app.get('/instruments', async (req, res, next) => {
    const allInstruments = await Instrument.findAll();
    return res.json(allInstruments);
});

// STEP 2: Implement named scopes to their respective routes
app.get('/instruments/keyboard', async (req, res, next) => {
    // const keyboards = await Instrument.findAll()
    const keyboards = await Instrument.scope('keyboard').findAll();
    res.json(keyboards);
});


app.get('/instruments/string', async (req, res, next) => {
    // const strings = await Instrument.findAll()
    const strings = await Instrument.scope('string').findAll();
    res.json(strings);
});

app.get('/instruments/woodwind', async (req, res, next) => {
    // const woodWinds = await Instrument.findAll()
    const woodWinds = await Instrument.scope('woodwind').findAll(); // use the 'scope' method to fetch the Instruments that match the 'woodwind' scope
    res.json(woodWinds);
});

// STEP 3 CHALLENGE: Implement the named function scopes to their dynamic routes
// and returning the list in order by their names alphabetically
app.get('/stores/:storeId/instruments', async (req, res, next) => {
    // const filterStoreInstruments = await Instrument.findAll()
    const { storeId } = req.params; // Here we extract the 'storeId' argument from the request parameters

    const instruments = await Instrument.scope({ method: ['alphabetical', storeId] }).findAll(); // Here, we apply the 'alphabetical' scope to the instruments which belong to the store that has been specified by its 'storeId'

    res.json(instruments); // Finally, we return the results in JSON format.
});

app.get('/stores/:storeId/instruments/:type', async (req, res, next) => {
    const filteredInstruments = await Instrument.findAll()
    // Your code here
    res.json(filteredInstruments);
});

// List of all the stores in the database - DO NOT MODIFY
app.get('/stores', async (req, res, next) => {
    const allStores = await Store.findAll()

    res.json(allStores)
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
