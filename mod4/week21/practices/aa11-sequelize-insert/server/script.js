const build = async () => {
  const { Puppy } = require('./db/models');
  try {
    /* ====================== STEP 1 ====================== */
    // Using `build` and `save`, insert a record into the Puppies table with the
    // following attributes:
    // name: Trudy
    // ageYrs: 2
    // weightLbs: 38
    // breed: Brittany Spaniel
    // microchipped: false
    // Your code here

    const newPuppy = Puppy.build({
      // id: 11,
      name: "Trudy",
      ageYrs: 2,
      breed: "Brittany Spaniel",
      weightLbs: 38,
      microchipped: false
    });

    newPuppy.save();

    //^ If this was a route handler, we could destructure the attributes from the request object using the following syntax:

    // const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

    // const newPuppy = puppy.build({
    //   name,
    //   ageYrs,
    //   breed,
    //   weightLbs,
    //   microchipped
    // })

  } catch (err) {
    throw err;
  }

};

const create = async () => {
  const { Puppy } = require('./db/models');
  try {
    /* ====================== STEP 2 ====================== */
    // Using `create`, insert a record into the Puppies table with the following
    // attributes:
    // name: Beans
    // ageYrs: 1.6
    // weightLbs: 42
    // breed: Bulldog
    // microchipped: true
    // Your code here

    const newPuppy = Puppy.create({
      id: 12,
      name: "Beans",
      ageYrs: 1.6,
      breed: "Bulldog",
      weightLbs: 42,
      microchipped: true
    })

  } catch (err) {
    throw err;
  }
};

if (require.main === module) {
  require('dotenv').config();
  const { resetDB, seedAllDB } = require('./test/utils/test-utils');
  (async () => {
    await resetDB("db/dev.db");
    await seedAllDB("db/dev.db");
    try {
      await build();
    } catch(err) {
      console.error('There was an error thrown while building:');
      console.error(err);
    }
    try {
      await create();
    } catch(err) {
      console.error('There was an error thrown while creating:');
      console.error(err);
    }
  })();
} else {
  module.exports = { build, create };
}
