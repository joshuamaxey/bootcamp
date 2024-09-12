//! Review

// Tables (entities) have columns (fields) and rows (records).

// Tables may contain a primary key, which is a unique identifier for its records

// Tables may also contain foreign keys, which are references to primary keys of other tables that are used to create associations between tables.

// A schema is like a blueprint for a table which helps visualize them as well as keep trak of primary keys, foreign keys, and talbe relationships.

//! Stages of Relational Database Design

//^ 1. Define the purpose/entities of the relational database

// Why is the database being created? What problem is it solving? What is the data used for?

// Identify main tables (entities)

// Identify table attributes (columns [fields] and rows [records])

    // start with the the columns in each table
    // types of each column

//^ 2. Identify primary keys

// Identify the primary key for each table. Most of the time, we can use ids as the primary keys. (order id, user id, product id, etc)

//^ 3. Establish table relationships

//* one-to-one

//* one-to-many

// Each record in table A is associated with multile records in table b.

// Each record in table b is associated with only one record in table a.

// Achieved by using a primary key + foreign key. The foreign key in table b references the primary key of table a.

//* many-to-many

//^ 4. Apply normalization rules

//* Normalization is the process of optimizing the database structure so that redundancy and confusion are eliminated

//* The rules of normalization are called "normal forms" and are as follows:

//& 1. first normal form

// Eliminate repeating groups in individual tables

// Create a separate table for each set of related data

// Identifyh each set of related data with a primary key

//& 2. second normal form

// Create separate tables for sets of values that apply to multiple records (join table)

// Relate these tables with a foreign key

//& 3. third normal form

// Eliminate fields that do not depend on the table's key (optional?)

//& 4. Boyce-Codd normal form

//& 5. Fifth normal form
