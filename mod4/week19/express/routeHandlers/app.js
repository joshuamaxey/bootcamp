const express = require("express");

const app = express();

const port = 8081;

app.listen(port, () => console.log(`The server is listening on port ${port}`));

app.get("/", (req, res) => {
    res.send("The server is alive!");
})

//! Express provides flexibility with respect to the format of our route paths.

//^ Route path can be a string, string pattern, regular expression, or an array containing any combination of these

let paths = ['/', '/abc', '/a/'];

app.get(paths, (req, res) => {
    res.send("Valid path!") // We can use the 'res.send()' method to send a plain text response to the client
})

// Now the application will send the same response ("Valid path!") to any GET request that matches any of the expressions in the 'routes' array

//^ Alternatively, we can pass such an array directly ito the function

app.get(['/welcome', '/hello'], (req, res) => {
    res.send("Welcome to the app!")
})

// Now the application will send "Welcome to the app!" in response to any GET request to the urls specified in the array of paths (/welcome or /hello)

//^ The 'res' object also supports sending JSON back to the clinet through the .json() method. This calls JSON.stringify() on the input to res.json(), serialiing it. THen it becomes the job of the client to deserialize the response to properly interact with it as a JavaScript object.

app.get('/json', (req, res) => {
    const response = {
        property1: "value1",
        property2: "value2"
    };
    res.json(response);
})

//! This is commented out because I don't know how to correctly implement it

// navigate to "/json" to see the response {"property1":"value1","property2":"value2"} in the browser

// const data = {
//     users: [];
// }

// We can use POST to add a user


// app.post('/users', (req, res) => {
//     let newUser = {
//         name: "Joshua",
//         age: 30
//     };
//     data.users.push(newUser);
//     res.send(newUser);
// });

// app.get('/users', (req, res) => {
//     res.send(data.users);
// });

//! End incorrect code

//^ We can als send status codes in response to our requests using the res.status(code) syntax, then append the .send("text") method to send an accompanying message that will be visible in the web page.

app.get("/invalid", (req, res) => {
    res.status(404).send(`That page wasn't found. Try a different path`)
})

// If we navigate to "localhost:8081/*" we will see the above error message printed to the page. If we go to the Network tab of the dev tools and then try to load this pgae, we'll see status code 404

const users = {};
let nextId = 1;
const sampleNames = ["Sara", 'Jesse', 'Jordan', 'Kelly', 'Ross']

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const newUser = sampleNames[Math.floor(Math.random() * sampleNames.length)];

    users[nextId] = {
        id: nextId,
        name: newUser
    };

    nextId++
    res.send({
        status: 'success',
        message: `New user ${newUser} added with ID ${nextId - 1}`
    });
})

app.delete('/users/:id', (req, res) => {
    const deletedUser = users[req.params.id];

    if (deletedUser) {
        delete users[req.params.id];
        res.send({
            status: 'success',
            message: `Deleted user ${deletedUser.id}, name: ${deletedUser.name}`
        });
    } else {
        res.status(404).send({
            status: 'failure',
            message: `ID ${req.params.id} not found`
        })
    }
})



app.get("*", (req, res) => {
    res.status(404).send("This will kill all requests that follow"); // This is a wildcard route handler. It will supercede any route handler that follows it, which means that those route handlers will not work. If we define a route handler after this one, any attempt to reach that route handler by navigating to the corresponding URL will produce the 404 error that is defined within this wildcard route handler. Therefore if we want to define a handler like this one without breaking our code, we have to define it AFTER the other route handlers that are defined within our app.
})
