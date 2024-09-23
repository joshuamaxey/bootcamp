// Recall tht the simplest way to represent a many-to-many relationship between two tables is to use a JOIN table that bridges them together.

// A JOIN table is a table that contains the a foreign key for each table that it JOINs together and specifically serves the purpose of JOINing those tables and representing the many-to-many relationships between them.

// Lets say that we want to create some tabls to represent movies and their genres. Movies can have multiple genres and genres can have multiple movies, so this is a many-to-many relationship.

// To add migrations for creating the 'movies' and 'genres' tables, we could use the following syntax in the CLI:

"npx sequelize model:generate --name movie --attributes title:string" // create the 'movie' model
"npx sequelize model:generate --name genre --attributes genre:string" // create the 'genre' model

// Next, we can add the migration to create the movieGenres JOIN table:

"npx sequelize model:generate --name movieGenres --attributes movieId:integer,genreId:integer"

// After we've created the three models, we can edit the 'movieGenres' migration file such that:
    // 1. the 'movieId' column references the 'id' column of the 'movies' table, and...
    // 2. the 'genreId' column references the 'id' column of the 'genres' table

// Here is an example of what the 'up' function in the migration file to create the 'movieGenres' table might look like:

up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieGenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //-------------------------------
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Movies' } // 'references' attribute, which makes this a foreign key column
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Genres' } // 'references' attribute, which makes this a foreign key column
      },
      //-------------------------------
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
}
