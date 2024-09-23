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
    const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

    res.json(allPuppies);
});


// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/build', async (req, res, next) => {

    // const newPuppy = Puppy.build({
    //     id: 11,
    //     name: "Trudy",
    //     ageYrs: 2,
    //     breed: "Brittany Spaniel",
    //     weightLbs: 38,
    //     microchipped: false
    // })

    // await newPuppy.save();

    // res.json(`${newPuppy.name} successfully created!`);

    // ! ------------------------------------

    // const newPuppy = Puppy.build({
    //     name: "George",
    //     ageYrs: 1.2,
    //     breed: "Bulldog",
    //     weightLbs: 40,
    //     microchipped: true
    // })

    // await newPuppy.save();

    // ! ------------------------------------

    const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

    const newPuppy = Puppy.build({
      name,
      ageYrs,
      breed,
      weightLbs,
      microchipped
    })

    await newPuppy.save();

    res.json({
        message: `${newPuppy.name} was successfully created!`,
        data: newPuppy
    })
})

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/create', async (req, res, next) => {

    const newPuppy = await Puppy.create({
        id: 12,
        name: "Beans",
        ageYrs: 1.6,
        breed: "Bulldog",
        weightLbs: 42,
        microchipped: true
    })

    // ! -------------------------------------

    // const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

    // const newPuppy = Puppy.create({
    //     name,
    //     ageYrs,
    //     breed,
    //     weightLbs,
    //     microchipped
    // })

    // ! -------------------------------------

    // const newPuppy = await Puppy.create({
    //     name: "Fred",
    //     ageYrs: 2.1,
    //     breed: "Boston Terrier",
    //     weightLbs: 20,
    //     microchipped: true
    // })

    res.json({
        message: `${newPuppy.name} was successfully created!`,
        data: newPuppy
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
