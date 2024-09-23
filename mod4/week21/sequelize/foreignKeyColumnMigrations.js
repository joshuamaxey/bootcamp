// In Sequelize, foreign key columns are defined within migration files. When you create a migration file, you can specify foreign key relationships using the 'references' field in the column definition.

// Specifically, we add a foreign key column to the appropriate createTable migration.

// A foreign key olumn definition will include a 'references' attribute, which specifieds which table and column the foreign key refers to. It can also include an onDelete attribute which describes how a DELETE operation on the references table affects the records in the table.

// The 'references' attribute is an object with two keys:
    // 1. The 'model' key is the name of the TABLE
    // 2. The 'key' key is the name of the colun in the referenced table that connects with the foreign key column (this is usually the primary key of the referenced table)

// The syntax will look something like this:

queryInterface.createTable('Tweets'), {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    // Other columns within the table will appear here...

    // Below is the foreign key column:

    tableTwoId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'userId',
        },
        onDelete: 'cascade'
    }
}

// NOTE the "onDelete: 'cascade'" indicates that if a user is deleted, all the tweets referencing that user's record would also be deleted (if we delete a user, we also delete all their tweets)

// ALSO NOTE that the 'references' attribute should ONLY be defined for foreign key columns
