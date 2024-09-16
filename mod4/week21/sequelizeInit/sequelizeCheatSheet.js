// ! What is Sequelize?

// Sequelize is a Node.js ORM, so its commands and configurations are typcally written in JavaScript

// An ORM (Object-Relational Mapper) is a tool that helps bridge the gap between object-oriented programming languages (like JavaScript) and relational databases. It is a programming technique that is used to convert data between a relational database and the objects in an object-origented programming language. IT creates a virtual object database that can be used within the programming language, making it easier to interact with the database without writing raw SQL queries.

// With Sequelize in particular, you define models (classes) that represent your database tables and use them to interact with the database.

// ^ Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the sequelize-cli command-line tool package.

// ! Sequelize CLI commands:

// ^ Initialize Sequelize (from scratch in a new directory)

//* 1. "npm init -y" to initialize a new Node.js project and creates a package.json file with the default settings.

//* 2. "npm install sequelize" installs the sequelize package locally in your project

//* 3. "npm install --save-dev sequelize-cli" installs the sequelize-cli package

//* 4. "npx sequelize-cli init" this is the sequelize-cli initialization command

// ^ Add a migration file to create a table and the table's model file

//* "npx sequelize model: generate --name <NameOfModel> --attributes <column1Name:type,column2Name:type>"

//* "npx": This is a package runner tool that allows us to run commands from npm packages without grobally installing them.

//* "sequelize": This is the sequelize CLI tool.

//* "model:generate": The command to generate a new model

//* "--name <NameOfModel>": The name of the model you want to create. This will also be the name of the table in the database (plural)

//* "attributes column1Name: type,column2Name:type": A comma-separated list of column names and their data types for the new table.

// A migration file in Sequelize is a JavaScript file that contains instructions to modify the database schema. It helps us manage and version control our database schema changes over time. It typically includes two functions:

    // 1. "up": defines the changes to apply to the database (creating tables, adding columns, etc)
    // 2. "down": Defines how to revert those changes (dropping tables, removing columns, etc)

// ^ Lets say that we want to create a "tests" table

// * "npx sequelize-cli model:generate --name Test --attributes column1:string,column2:integer,column3:boolean"

// This generates 2 files:

    // 1. Model File: located in the 'models' directory, this file defines the Test model (test.js)
    // 2. Migration File: Locatd in the 'migrations' directory, this file contains the instructions to create the tests table with the specified columns.

// ^ Add a blank migration file

// * "npx sequelize migration: gnerate --name <name-of-migration-file>"

// ^ Run the migration files:

// * "npx dotenv sequelize-cli db:migrate"

// This command executes the 'up' function in the migration file, creating the tests table with the specified columns.

// ^ Undo all migrations:

// * "npx dotenv sequelize db:migrate:undo:all"

// ^ Add a blank seeder file

// * "npx sequelize seed:generate --name <name-of-seed-file>"

// ^ Commit all seeder files

// * npx dotenv sequelize db:seed:all

// ^ Undo all seeder files

// *"npx dotenv sequelize db:seed:undo:all"
