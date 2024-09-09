# SQLite3 CREATE/DROP

>Start SQLite3 by running the following command in your CLI:

*sqlite3*

>Create a new database named "practice" using the following command in your CLI:

*.open practice.db*

>Create a new table using <a href=https://dbschema.com/2023/06/03/sqlite/create-table/#5-creating-a-table-in-sqlite3>this syntax</a> in your CLI:

**CREATE TABLE pets** ( <br>
    id INTEGER PRIMARY KEY, <br>
    name VARCHAR(50),<br>
    age_yrs NUMERIC(3,1),<br>
    breed VARCHAR(100),<br>
    weight_lbs INTEGER,<br>
    microchipped BOOLEAN<br>
);

> Verify that your table was created using the following commandi n your CLI:

*.tables*

If your table has been successfully created, you will see the name of the table printed like this in the console:

**pets**

> Remove the table from the database by running the following command in your CLI:

*DROP TABLE IF EXISTS pets*;

Note the use of the *IF EXISTS* statement, which is not a necessity but is useful to avoid errors if the table does not exist.

*Now verify that the table was deleted by running the **.tables** command again*
