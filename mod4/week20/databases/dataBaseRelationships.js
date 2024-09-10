// Tables (entities) have rows (records) and columns (fields).

// A primary key is a column (field) that stores a unique value for each row (record).

//^ A foreign key is column references the primary key of another table

//* A foreign key is made by combining the singular form of the foreign table with the name of the primary key in that foreign table:

// ssn	        first_name	last_name //* Here, 'ssn' is the primary key
// 123-45-6789	John	    Doe
// 987-65-4329	Jane	    Doe
// 987-65-4320	John	    Smith
// jobs table:

// id	job_name	 start_date	  end_date	    person_ssn //* here, person_ssn is the foreign key ('person' singular form of 'people' from the first table, combined with 'ssn' [the name of the primary key in the people table] to make the foreign key 'person_ssn)
// 1	Bookkeeper	 1997-03-05	  2004-09-30	123-45-6789
// 2	Janitor	     2000-01-04	                987-65-4329
// 3	Marketer	 2002-11-12	  2005-12-20	987-65-4320
// 4	Accountant	 2004-10-01	                123-45-6789

//^ There are three types of relationships found in relational databases

//* 1. one-to-one

// This is the simplest relationship wherein ONE row in table A references ONe row in table B. This is good for separating data based on responsiblities.

//* 2. One-to-many

// In this relationship, ONE row in a table can be ferences one time by ANY NUMBER of rows in another table.

// "Each person has many jobs" is one example of a one-to-many relationship we can see in the tables on lines 9 - 19

//* 3. Many-to-many

// Each row in one table can be referencesd by many rows in another table, and vice versa.

// For example: each person can read multiple books, and each book can be read by multiple people.
