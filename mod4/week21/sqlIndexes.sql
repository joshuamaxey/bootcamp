-- An SQL index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional storage space and slower write operations.

-- Again, SQL indexes IMPROVE speed of retrieval and REDUCE speed of read/write operations.

-- An index in SQL is similar to an index in a book: It helps you quickly find the information you're looking for without having to read through the entire book.

-- ^ Indexes result in FASTER SEARCHES because they allow the database to find rows much more quickly. Instead of scanning the entire table, the database can use the index to jump directly to the rows that match the query.

-- * For example: If you have an index on the 'last_name' column of a 'users' table, a query such as 'SELECT * FROM users WHERE last_name = 'Smith'' can be executed much faster because the database can use the index to quickly locate all rows where last_name is 'Smith'.

-- ^ Indexes result in SLOWER INSERT AND DELETE operations because the database has to update the relevant indexes for every insertion operation AND has to remove corresponding entries from all index for each DELETE operation.

-- & AS A RULE: Only use indexes for columns that will have MORE lookup oeprations than insertion and deletion operations.

-- For read-heavy workloads, indexes are beneficial
-- For write-heavy workloads, indexes are not beneficial (can be detrimental)

-- ! CREATING AND REMOVING INDEXES IN SQLite3

-- ^ To create an SQL index using SQLite3, use the following syntax:

CREATE INDEX index_name ON table_name(column_list);

CREATE INDEX
    idx_index_name
    ON table_name(column_list);

-- For instance, consider the following tables:

CREATE TABLE bakers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name VARCHAR
);

CREATE TABLE cookies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    baker_id INTEGER REFERENCES cookies(id),
    type VARCHAR,
    chocolate BOOLEAN
);

-- TO create an index on the 'type', 'chocolate', and 'baker_id' columns in the 'cookies' table, you can use the following syntax:

CREATE INDEX
    idx_cookies_type_chocolate_baker_id -- index_name
    ON cookies(type, chocolate, baker_id); -- table_name(column-list)

-- Note that the index's first column (in the column list) matters when we are using multiple column names within an index. Make sure you list the most commonlyf iltered coumn first in the list! That way the ordering of records in the index will maximize efficiency for your most commonly-used queries.

-- ^ Here are some query examples where 'idx_cookies_type_chocolate_baker_id' will be used in the queries:

SELECT * FROM cookies
WHERE type = 'sugar';

SELECT * FROM cookies
WHERE type = 'sugar' AND baker_id = 1;

SELECT * FROM cookies
WHERE baker_id = 1 AND type = 'sugar';

SELECT * FROM cookies
WHERE type = 'sugar' AND chocolate IS TRUE AND baker_id = 1;

SELECT * FROM cookies
WHERE chocolate IS TRUE AND type = 'sugar' AND baker_id = 1;

-- Notice that if the 'type' column is NOT in the 'WHERE' clause of a query, that query will NOT use the index!

-- ^ Here are some query examples where 'idx_cookies_type_chocolate_baker_id' will NOT be used:

SELECT * FROM cookies
WHERE chocolate IS TRUE;

SELECT * FROM cookies
WHERE baker_id = 1;

SELECT * FROM cookies
WHERE backer_id = 1 AND chocolate IS TRUE;

SELECT * FROM cookies
WHERE chocolate IS TRUE AND baker_id = 1 IS FALSE;

-- It is possible to create more than one idnex on a column, depending on your needs. If you are usually searching by only one column name, you may only need one index. But if you are commonly searching by other oclumn names, or a combination of column names, it could make sense to define additional SQL indexes.

-- & IMPORTANT: When using a multi-column index, the index will ONLY be used if the WHERE clause includes the FIRST COLUMN mentioned in the index! The first column mentioned is called the 'leading colun' and the databse engine uses it to quickly narrow down the search. If the leading column is NOT included in the WHERE clause, the index cannot be used effectively!

-- This is why, above, the index 'idx_cookies_type_chocolate_baker_id' is ONLY used when the WHERE clause of the query includes the 'type' column. If the 'type' column is not included in the WHERE clause of the query, the index cannot be used, even if the query does include OTHER columns that were mentioned in the index's list of columns.

-- ! CREATING A 'UNIQUE' CONSTRAINT ON A COLUMN

CREATE TABLE bakers (
    id INTEGER PRIMARY KEY,
    full_name VARCHAR UNIQUE -- Create a 'unique' constraint on the full-name column
);

-- When you define a UNIQUE constraint on a column, SQL creates an idex for that column (under the hood). So if a column is defined as UNIQUE, there is no need to create that index for yourself.

-- Note, however: Adding a UNIQUE constraint to a column creates an index for that column. But creating an index for a column does not necessarily add a UNIQUE constraint!

-- ^ You can define a UNIQUE constraint while creating an index on a column if you have not already defined that constraint upon table creation:

CREATE UNIQUE INDEX idx_cookies_baker_id_type_chocolate
ON cookies(baker_id, type, chocolate); -- This defines an index with a UNIQUE constraint to avoid duplicates across three columns

-- & To add a UNIQUE constraint when creating an index, all you have to do is add the UNIQUE keyword BETWEEN the 'CREATE' and 'INDEX' keywords, like above.

-- ^ Note that there is a differnce between defining a UNIQUE constraint on multiple INDIVIDUAL columns vs defining a UNIQUE constraint across MULTIPLE columns!

-- Defining a unique constraint on multiple individual columsn means that each column must have unique values independently of the other columns. This means that each column with the UNIQUE constraint cannot have any duplicate values! But the uniqueness is enforced separately for each column.

-- Defining a UNIQUE constraint on multiple columns together menas that the combination of values in those columns must be unique! This means that while individual columns CAN have duplicate values, the combination of values across the specified columns must be UNIQUE.

-- ! REMOVING AN SQL INDEX

-- We can remove an SQL index using the DROP INDEX command with the index name like this:

DROP INDEX idx_cookies_type_chocolate;

-- ! SEARCHING FOR INDEX NAMES ON A TABLE

-- ^ To look up a list of all the indexes that are applied on a table, you can use the following sqlite3 commands in the terminal:

.indexes -- returns a list of all of the database's indexes

.indexes table_name -- returns a list of all indexes on that table
-- For example: '.indexes bakers' returns a list of all indexes in the bakers table

.indexes %keyword% -- returns al ist of all the indexes including the keyword

-- ! What happens to indexes if you alter a table?

-- Lets say that we have this index defined: 'idx_cookies_baker_id_type_chocolate'

-- If we drop the 'type' column, the index definition for 'idx_cookies_baker_id_type_chocolate' will automatically be adjusted to only include the remaining two columns of 'baker_id' and 'chocolate'.

CREATE UNIQUE INDEX idx_cookies_baker_id_type_chocolate
ON cookies(baker_id, chocolate) -- 'type' was automatically removed
