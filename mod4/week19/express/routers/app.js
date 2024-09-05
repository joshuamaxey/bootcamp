// Import express as well as the router modules (using the 'require' directive) and assign them to variables
const express = require('express');
const home = require('./routes/home');
const schedule = require('./routes/schedule');
const roster = require('./routes/roster');

const app = express(); // Initialize an instance of the express application and save it to a variable 'app'

// Next we need to expose the routers to the outside world so tha they can handle incoming HTTP requests. Tell your Express application (app) to use them by calling the app.use() method and passing in the router instances as arguments

app.use('/home', home);
app.use(schedule);
app.use(roster);

//! For some reason the reading said to include the URL in the call to app.use() like below. But when I do this, the code no longer works. None of the GET requests return anything.

// app.use('/home', home);
// app.use('/schedule', schedule);
// app.use('/roster', roster);

//& Never mind. This works, but we have to change the route in the router files as well.

//! Nope. Still doesn't work. Pointless.

//Combine the router mount paths and route paths defined within the router to easily and quickly build a hierarchy of routes:

//home
//schedule/week
//schedule/week/:day
//roster
//roster/:position

// app.use('/', (req, res) => home);

let port = 8000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));
