// ! INSERT in SQL:

// ^ Inserting a Single Record

// INSERT INTO table_name (column1, column2, column3)
// VALUES
//     (column1_value, column2_value, column3_value)

// ^ Inserting Multiple Records:

// INSERT INTO table_name (column1, column2, column3)
// VALUES
//     (column1_value1, column2_value1, column3_value1)
//     (column1_value2, column2_value2, column3_value2)
//     (column1_value3, column2_value3, column3_value3)

// ! INSERT in Sequelize:

// ^ DEFINE A 'Dog' MODEL IN SEQUELIZE:

'use strict'; // This statement ensures that our code adheres to stricter-than-standard parsing and error handling procedures, which helps us write more secure and reliable code.

const { Model } = require('sequelize'); // The sequelize 'Model' represents a table in our database. Each instance of a Model corresponds to a row (record) in that table. This Model class provides methoxs for querying and manipulating the data in our table.

module.exports = (sequelize, DataTypes) => { // This line exports a function that takes 'sequelize' and 'DataTypes' as arguments. It will return the 'Dog' model, allowing it to be imported and used in other parts of our application.

    class Dog extends Model { // define a new class 'Dog' that extends Sequelize's 'Model' class, inheriting all of its functionality.
        static associate(models) { // This is a static method used to define associations between models. This is where we would specify relationships like 'belongsTo', 'hasMany', etc. For example: If a Dog belongs to an Owner, you would define that relationship here. Associations define relationsihps between models (tables) in Sequelize, similar to foreign keys in SQL. They establish connections between different tables.
            //^ Define our 'associations' here
        }
    }

    Dog.init({ // Initialize the Dog model with its attributes
        dogName: DataTypes.TEXT, // define the dogName attribute as a text field
        breed: { // Defines the 'breed' attribute as a text field that cannot be null
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize, // This is the second argument to Dog.init and specifies options for the model.
        modelName: 'Dog' // Here, we associate the model with teh Sequelie instance and set the model name to 'Dog'
    });

    return Dog; // return the 'Dog' model so it can be used elsewhere in our application
}

// ^ INSERT METHOD 1: Model.build() AND Instance.save()

// & We can use Model.build() to generate an instance of the model with any attributes that we choose to assign. Note that Model.build() does NOT persist our model in the database!

const newDog = Dog.build({ // create a new instance of our Dog model
    dogName: "Fido",
    breed: "Dalmation"
});

await Dog.findOne({ // Check if Fido is in the database
    where: {
        dogName: "Fido"
    }
}); // This will return null because Dog.build() creates the record but does NOT persist it in the database

// & If we want to insert the newDog instance into the database, we can do it with the Instance.save() method:

await newDog.save(); // Save our newDog (Fido) in the database

await Dog.findOne({ // Check to see if Fido exists in the database
    where: {
        dogName: "Fido"
    }
}) // This will return Fido's record now that we have saved our newDog instance to the databse using the Instance.save() method

// ^ INSERT METHOD 2: Model.create()

// the Model.create() method runs Model.build() and Instance.save() together in one step. Note that this is a good choice only when you are comfortable immediately inserting and persisting a record in your databse without any manipulation. If you need to manipulate or validate the data before saving it to the database, Model.build() is a better choice because it allows you to perform those actions on the data before inserting into your database using Instance.save().

const newDog2 = await Dog.create({ // Here we use Model.create() to create a new Dog instance and insert it directly into the databse in one step. Note that because we're doing the insertion, this funciton is asynchronous (uses await)
    dogName: "Fido",
    breed: "Dalmation"
});

await Dog.findOne({ // Check if fido is in the database
    where: {
        dogName: "Fido"
    }
}); // This will return Fido's record because we used Model.create() to create and insert Fido's record directly into the databse in one step

// ^ INSERT METHOD 3: Model.bulkCreate()

// The Model.bulkCreate() method takes in an array of instances to insert and persist in the databse (and also provides some additional options to modify the insertion)

const newDog3 = await Dog.bulkCreate([ // Use the Model.bulkCreate() method to create and insert multiple records into our database in a single step.
    { dogName: "Fido", breed: "Dalmatian" },
    { dogName: "Maggie", breed: "Golden Retriever" },
    { dogName: "Toby", breed: "Poodle" }
]);

const databaseDogs = await Dog.findAll(); // returns records of all dogs. They are present in the databse becase (like the Model.create() method) Model.bulkCreate() creates AND inserts the specified records into the database in a single step.

// ! SEQUELIZE INSERTION ERRORS

// Error messages may be thrown when inserting data for a number of reasons.

// 1. model-level validations may fail (ValidationError)
// 2. databse-level constraints may fail (such as a uniqueness constraint)

// ^ THE instance.validate() METHOD

// The instance.validate() method will run any model-level validations on a record before savingi t to the databse. This allows us to catch the errors before triggering the SQL commands to actually insert the data into the table.

// For instance, consider the 'not null' constraint that we write for our 'Dog' model on line 37 above. The instance.validate() method can be used to manually run the validation before saving the record to the databse. Like this:

const newDog4 = Dog.build({ // Generate a new instance of our Dog model
    dogName: "Macy"
});

await newDog.validate(); // Validate the new dog object

// ^ This validation will FAIL because we did not provide a breed (which is subject to the 'not null' constraint)

newDog4.breed = "Dacshund"; // Add the 'breed' property to our new Dog instance

await newDog.validate(); // Validate the new dog object

// ^ This time we pass the validation because we have provided the 'breed' attribute which is subject to the 'not null' constraint

await.newDog.save(); // Now that we have validated the record (verified that it meets our constraints), we can save it to the database.
