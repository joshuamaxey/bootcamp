// ! UPDATE in SQL

// Lets say we have this table:

//^ id	species	            latitude	longitude
//  1	American Robin	    66.160507	-153.369141
//  2	Belted Kingfisher	82.507487	-147.826054
//  3	Great Blue Heron	23.936047	181.623863

// Lets also say that we realize our longitude for the third entry (species: Great Blue Heron) is incorrect. We can use the following SQL syntax to update the table:

// * UPDATE birds
// * SET longitude = 81.623863
// * WHERE species = "Great Blue Heron"

// ! UPDATE A SINGLE ATTRIBUTE IN SEQUELIZE

// We can accomplish the same thing in Sequelize by re-assigning the value of an attribute:

// ^ First, we find the record and save it to a variable:

const greatBlueHeron = await Bird.findOne({
    where: {
        species: "Great Blue Heron"
    }
});

// ^ Then we update the attribute by re-assigning the value of the chosen property:

greatBlueHeron.longitude = 81.623863;

// ^ Finally, we save the updated record

await greatBlueHeron.save();

// ! UPDATE MULTIPLE ATTRIBUTES IN SEQUELIZE WITH record.set()

// ^ First, find the record and save it to a variable

const greatBlueHeron2 = await Bird.findOne({
    where: {
        species: "Great Blue Heron"
    }
});

// ^ Then update multiple attributes of the record using the record.set() method

greatBlueHeron2.set({ // We can update multiple attributes using the record.set({attribute1, attribute2}) method
    longitude: 81.623863,
    latitude: 58.936047
});

// ^ Then we save the updated record:

await greatBlueHeron2.save();

// ! UPDATE MULTIPLE ATTRIBUTES IN SEQUELIZE WITH record.update()

// record.update() sets new attributes for a specified record AND saves those changes in the database table in one step.

await greatBlueHeron2.update({
    longitude: 81.623863,
    latitude: 58.936047
});

// ^ Notice HERE when we use the record.update() method, we do not need to use record.save() because the record.update() method both sets the attributes to their new values AND saves the update in the databse in a single step.

// ! UPDATE MULTIPLE RECORDS IN SEQUELIZE WITH Model.update()

// Consider that we realize that records 1 and 2 (American Robin and Belted Kingfisher) were observed in the same locaiton. This would mean that we need to update the longitude and latitude for both records. We can update both records at the same time by using the following syntax:

const { Op } = require('sequelize');

await Bird.update( // call the Model.update() method on the Bird table

    { // indicate which attributes we want to change
        latitude: 70.0000,
        longitude: 130.333333
    },

    {
        where: { // add our where clause
            id: { // indicate we want to apply the updates where the 'id'...
                [Op.or]: [1, 2] // ...is either 1 or 2 (both locations)
            }
        }
    }
)

// ! UPDATING RECORDS IN SEEDER FILES USING queryInterface.bulkUpdate(table, data, options);

await queryInterface.bulkUpdate(table, data, options);
