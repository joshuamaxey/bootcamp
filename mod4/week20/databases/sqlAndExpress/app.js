require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json())

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.data_source,
    sqlite3.OPEN_READWRITE
);

app.get('/trees', (req, res, next) => { // define our route

    //Query the database (lines 17 - 20)
    const sql = 'SELECT * FROM trees';
    const params = [];

    db.all(sql, params, (err, rows) => {
        // If there is an error, catch it and use the error handling for Express by calling next(err)
        if (err) {
            next(err);
        } else {
            res.json(rows); // respond with the 'rows' of the table in JSON format
        }
    })
})

// Now lets write a route handler that will get a specific row from the table in our database

app.get('/trees/:id', (req, res, next) => {
    //Query the database
    const sql = 'SELECT * FROM trees WHERE id = ?'; // Notice that we have a "?" where a dynamic value needs to go. In a route handler, the value usually comes a part of the route's path so it will be in req.params
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            next(err);
        } else {
            res.json(row);
        }
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));

// Running other SQL statements, like INSERT, DELETE, and UPDATE follow similar patterns.

//^ 1. Constant for the SQL statement, with ? where dynamic values need to go
//^ 2. Constant array for the params to substitute for each ? in the same order as the ?'s in the SQL constant
//^ 3. Calling the appropriate database funciton with the SQL statement, params, and the result handler function

// For non-select statements, use db.run(). The response handler function will pass through an error (err) if somethign goes wrong. For example:

app.post('/trees', (req, res, next) => {

    // SQL insert
    const sql = `INSERT INTO trees (tree, location, height_fit, ground_circumference_ft)
    VALUES (?, ?, ?, ?);
    `;
    const params = [
        req.body.name,
        req.body.location,
        req.body.height,
        req.body.size
    ];

    // SQL QUERY NEW ROW
    const sqlLast = 'SELECT * FROM trees ORDER BY id DESC LIMIT 1';

    // CALL database to INSERT and, if succcessful, return new row
    db.run(sql, params, (err) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'success'
            });
        }
    });
});
