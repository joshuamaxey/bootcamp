// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Database file - DO NOT MODIFY
// DO NOT DO THIS - USE .env VARIABLE INSTEAD

const DB_FILE = 'app.db'; // define a constant that holds the name of the SQLite database file. The database file (in this case app.db) will be usec to store and retrieve data. If the file doesn't already exist, SQlite3 will create it.

/**
 * Step 1 - Connect to the database
*/
const sqlite3 = require('sqlite3'); // Import the sqlite3 module, which provides the functionality to interact with SQLite3 databases in a Node.js application
const DB_PERMISSIONS = sqlite3.OPEN_READWRITE; // Define a constant that holds the permission flags for opening the database. sqlite3.OPEN_READWRITE is a flag that allows the database to be opened with read and write permissions. This means you can both read from and write to the database.

const db = new sqlite3.Database(DB_FILE, DB_PERMISSIONS); // Create a new SQLite database connection. This creates a new isntance of the sqlite3.Database class, connecting to the database file specified by DB_FILE with the permissions specified by DB_PERMISSIONS.

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get('/colors', (req, res, next) => { // define the route handler for the HTTP GET request to the /colors endpoint
    const sql = 'SELECT * FROM colors'; // define the SQL query to be executed. In this case, we want to select all columns from the 'colors' table
    const params = []; // This line defines an array to hold any parameters for the SQL query. Since the SQL query, in this case, doesn't require any parameters, this array is empty. However, it is good practice ot define it for consistency and future use.

    db.all(sql, params, (err, rows) => { // Execute our SQL query. This method runs the SQL query and retrieves all matching rows.
        res.json(rows); // send the query results back to the client as a JSON response. In this case, convert the 'rows' array to JSON format and send it as the HTTP resposne.
    });
});

// One color by id
app.get('/colors/:id', (req, res, next) => { // Define a route handler for the HTTP GET request to the /colors/:id endpoint.
    /**
     * STEP 2A - SQL Statement
     */
    const sql = `SELECT * FROM colors WHERE id = ?`; // Define he SQL query to be executed. In this case, select all columns from the colors table where the id matches a specified value.

    /**
     * STEP 2B - SQL Parameters
     */
    const params = [req.params.id]; // Define an array to hold the parameters for the SQL query. This array contains the 'id' parameter extracted from the request URL.

    /**
     * STEP 2C - Call database function
     *  - return response
     */
    db.get(sql, params, (err, row) => { // Execute the SQL query. In this case, retrieve a single row that matches the query.
        // Next we handle the result of the query...
        if (err) {
            next(err); // If an error occurred, pass the error to the next middleware function (error handler)
        } else {
            res.json(row); // If no error occurred, send the retrieved row back to the client as a JSON response.
        }
    })
});

// Add color
app.get('/colors/add/:name', (req, res, next) => {
    // SQL INSERT
    const sql = "INSERT INTO colors (name) VALUES (?)";
    const params = [req.params.name];

    // SQL QUERY NEW ROW
    const sqlLast = 'SELECT * FROM colors ORDER BY id DESC LIMIT 1';

    /**
     * STEP 3 - After INSERT, return the new row
     *  - insert
     *  - if error, go to next()
     *  - if no error, query for new row
     *  - return new row
     */
    // Your code here
})

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
