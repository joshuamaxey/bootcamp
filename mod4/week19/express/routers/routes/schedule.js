const express = require('express'); // import the express module via CommonJS syntax

const router = express.Router(); // The express module exports the ROUTER class via a property on the EXPRESS FUNCTION, which is used to create an instance of a router

router.get('/schedule', (req, res) => {
    res.send("Our team schedule");
})

const weeklySchedule = [false, true, true, false, true, false, true]

router.get('/schedule/week', (req, res) => {
    // send the full weekly schedule 
    res.json(weeklySchedule);
});

router.put('/schedule/week/:day', (req, res) => {
    // Update the schedule for the specified day to have a game
    const day = parseInt(req.params.day);
    weeklySchedule.splice(day, 1, true);
    res.json(weeklySchedule);
})

module.exports = router;
