// ! FINDER METHODS

// In Sequelize, SELECT statemetns are executed by 'finder' methods. THe most common are: 'findAll' and 'findOne'

// Lets assume we already have a 'User' model defined and have seeded our database with some users.

let User = "This variable represents a 'User' model"

// ^ If we want to execute THIS query...

// * SELECT * FROM Users;

// ^ ...We will use THIS finder method implementation:

const users1 = await User.findAll();

// We can also use the 'findOne' or 'findAll' method with an 'attribute' object to indicate which columns we want to return

// ^ For instance, if we want to execute THIS query...

// * SELECT firstName, lastName FROM Users;

// ^ We can use this syntax:

const users2 = await User.findAll({
    attributes: ['firstName', 'lastName'] // Notice the attributes are in the form of an array of strings WITHIN an object. So the attributes are an array of 'attributes' within an object inside of the 'findAll' or 'findOne' methods.
});

// OR (for a single user)

const user = await User.findOne({
    attributes: ['firstName', 'lastName'] // Notice the attributes in this scenario are in the form of an array of strings WITHIN an object
});
