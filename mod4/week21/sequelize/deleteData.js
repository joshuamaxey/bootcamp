// ! DELETING DATA USING SQL

// We can use the following syntax to delete a single record or multiple records within a table in SQL:

//* DELETE FROM <table> WHERE <condition>

// Lets say that we have the following table:

//^ id	species	            latitude	longitude
//  1	American Robin	    66.160507	-153.369141
//  2	Belted Kingfisher	82.507487	-147.826054
//  3	Great Blue Heron	23.936047	181.623863

// ! DELETING A SINGLE RECORD USING SEQUELIZE

// Lets say that our data for the Great Blue Heron (id: 3) is incorrect and the record should be deleted. We can do this using the following code:

// ^ First, we find the record that we want to delete and save it to a variable

const greatBlueHeron = await Bird.findOne({
    where: {
        id: 3
    }
});

// ^ Then we delete the record using the record.destroy() method:

await greatBlueHeron.destroy();

// ! DELETING MULTIPLE RECORDS USING SEQUELIZE

await Bird.destroy( // invoke the destroy method
    {
        where: { // invoke our where clause
            id: { // specify that we want to target a record by its id
                [Op.lte]: 2 // target ALL records less than or equal to 2 (this would delete records 1 and 2 in this scenario)
            }
        }
    }
)
