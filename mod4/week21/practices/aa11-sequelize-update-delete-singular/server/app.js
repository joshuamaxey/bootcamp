// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {

    // Step 1: Find the record and save to a variable

    let id = req.params.puppyId; // capture 'id' from the request parameters

    let puppy = await Puppy.findOne({ // locate the given puppy by its id and save it to a variable
        where: {
            id: req.params.puppyId
        }
    })

    // res.json(puppy) //^ For debugging

    // Step 2: Update the attribute (re-assign the variable)

    if (req.body.ageYrs) { // if there is an 'ageYrs' attribute in the request body...
        puppy.ageYrs = req.body.ageYrs; // ...set the ageYrs property of our puppy to that value
    }

    if (req.body.weightLbs) { // repeat for weight
        puppy.weightLbs = req.body.weightLbs;
    }

    if (req.body.microchipped) { // repeat for microchipped
        puppy.microchipped = req.body.microchipped;
    }

    // Step 3: Save the updated record

    await puppy.save(); // save the changes we've made to our puppy

    // Step 4: Send response

    res.json({ // send json response including...
        message: `${puppy.name} was successfully updated!`, // a message confirming that our puppy was successfully updated
        puppy: puppy // then send our updated puppy as part of a response
    })
})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {

    // 1. Locate and save the puppy to a variable

    let puppy = await Puppy.findOne({ // find the puppy from its id by accessing req.params
        where: {
            id: req.params.puppyId
        }
    });

    // res.json(puppy) // ^ For testing

    // 2. Delete the record using the destroy method

    if (puppy) {
        await puppy.destroy(); // use the .destroy() method to remove the record
    }

    // 3. Send json response with 'success' message and the record of the deleted puppy

    res.json({ // send a json response back to the client
        message: `${puppy.name} has been deleted!`,
        puppy: puppy
    })
})


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
