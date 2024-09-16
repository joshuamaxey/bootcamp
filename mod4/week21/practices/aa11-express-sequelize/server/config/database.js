// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

module.exports = {
  development: {
    storage: process.env.DB_FILE, // Tell sequelize where to look for the database. This configuration utilizes an environment variable called DB_FILE which still needs to be created
    dialect: "sqlite", // Tell sequelize what type of database it is connecting to
    seederStorage: "sequelize", // allow Sequelize to track which seed files have been run in the database, which allows for easier seeding and unseeding
    benchmark: true, // logs the time it takes for Sequelize to execute each query that is run
    logQueryParameters: true, // logs the values used as parameters in the SQL queries that it generates.
    typeValidation: true, // Prevent values from being inserted into the dataase that do not have the same type as describe in the model. Enroces a model-level validation for data types
    // logging: false
  },
};
