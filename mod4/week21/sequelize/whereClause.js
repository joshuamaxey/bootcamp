const { Op } = require('sequelize'); // Here we import the "Op" object from sequelize using destructuring assignment. The "Op" object includes a set of operators that can be used to build sequelize queries.

// As noted previously in "selectQueries.js" SELECT statements are executedvia finder methods (findAll, findOne). We can add a 'WHERE' clause to our 'SELECT' statements by adding a key-value pair within the finder method's argument object.

// For example, assume that we have a 'Users' model and that we've already seeded our database with sample users.

const Users = "This variable represents a 'Users' model";

//^ So lets say we want to execute the following SQL query:

// SELECT firstName, lastName
// FROM Users
// WHERE lastName = 'Smith';

// ^ We can do this using the following syntax in Sequelize:

const smiths = Users.findAll({
    attributes: ['firstName', 'lastName'],
    where: { // Here we add the 'WHERE' clause to our query
        lastName: 'Smith'
    }
});

// Note that exact matches are not the only option supported by Sequelize! We can also use the operators imported on line 1 to build much more specific, detailed queries.

// ! USE CASES

// ^ FILTER A SINGLE COLUMN FOR EXACTNESS

//& SQL query:

// SELECT * FROM Users
// WHERE id = 3;

// & Sequelize query:

Users.findOne({
    where: {
        id: 3
    }
});

// ^ FILTER A SINGLE COLUMN FOR OTHER SQL COMPARISONS

// & SQL query:

// SELECT * FROM Users
// WHERE id >= 3;

// & Sequelize query:

Users.findAll({
    where: {
        id: {
            [Op.gte]: 3 // Op.gte = Operator [greater than or equal to]
        }
    }
});

// ^ USING AN AND CONDITIONAL BETWEEN TWO OR MORE COLUMNS

// We can filter on two different columns using an AND conditional by ading more key-value pairs in the 'where' object

// & SQL query:

// SELECT * FROM Users
// WHERE firstName = 'John' AND age = 20;

// & Sequelize query:

Users.findAll({
    where: {
        firstName: 'John',
        age: 20
        // Notice that the "AND" between the two columns ('firstName' and 'age') is IMPLIED. All we have to do is add a comma followed by the additional column within the 'where' object
    }
})

// ^ USING AN OR CONDITIONAL BETWEEN TWO OR MORE COLUMNS

// & SQL query:

// SELECT * FROM Users
// WHERE lastName = 'Smith' OR age > 60
// LIMIT 1;

Users.findOne({
    where: {
        [Op.or]: [
            {
                lastName: 'Smith'
            },
            {
                age: {
                    [Op.gt]: 60
                }
            }
        ]
        // Note that the Op.or operator takes an ARRAY of the conditions you want to evaluate using an OR statement.
    }
});
