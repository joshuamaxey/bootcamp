----------
-- ! Step 0 - Create a Query
----------
-- Query: Select all cats that have a toy with an id of 5

SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id -- joins the cats table with the cat_toys table on the cat_id column
WHERE cat_toys.toy_id = 5; -- Filters results to only include those rows where the toy_id is 5

-- SELECT * FROM cats
-- WHERE id IN (
--     SELECT cat_id FROM cat_toys
--     WHERE toy_id = 5;
-- )

--^ Paste your results below (as a comment) (These are the initial results of running the query):

-- 4002|Rachele|Maroon|Foldex Cat
-- 31|Rodger|Lavender|Oregon Rex
-- 77|Jamal|Orange|Sam Sawet

----------
-- ! Step 1 - Analyze the Query
----------
-- Query:

EXPLAIN QUERY PLAN
SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

--^ EXPLAIN QUERY PLAN results:

-- |--SCAN TABLE cat_toys
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)
-- sqlite>

--^ Is SQL searching or scanning each record in the table?

-- "SCAN TABLE cat_toys" means that SQLite is scanning the cat_toys table, going through each row to find matches where toy_id = 5.

-- "SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)" means that SQLite is searching the cats table using the primary key index, which is more efficient.

--^ Are any indexes being applied?

-- Yes. The primary key index on the 'cats' table is being used. THis is indeicatedby SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)

--^ What order are the tables being searched or scanned?

-- 1. cat_toys: SQLite first scans the cat_toys table to find rows wehre toy_id is 5.

-- 2. cats: For each matching row in cat_toys, SQLite searches the 'cats' table using the primary key index to find the corresponding cat.

-- ^ Summary:

-- First, cat_toys is canned
-- Second, cats is being searched using the primary key index

-- ^ What do your results mean?

    -- * Was this a SEARCH or SCAN?

    -- It was both!

    -- * What does that mean?

    -- This means that the query is running efficiently with respect to the primary key index, but could possibly be made more efficient by adding an additional index for the initial search.

----------
-- ! Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

.timer on
SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- ^ Paste your results below (as a comment):

-- 4002|Rachele|Maroon|Foldex Cat
-- 31|Rodger|Lavender|Oregon Rex
-- 77|Jamal|Orange|Sam Sawet
-- Run Time: real 0.002 user 0.000000 sys 0.002213

----------
-- ! Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

CREATE INDEX idx_cat_id ON cat_toys(cat_id); -- Create an index on the cat_id column

-- When we run ".indexes" we get: "idx_cat_id" which indicates that our index has been successfully created!

-- Analyze Query:

EXPLAIN QUERY PLAN
SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- ^ Paste your results below (as a comment):

-- |--SCAN TABLE cat_toys
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)
-- Run Time: real 0.000 user 0.000000 sys 0.000221

-- ^ Analyze Results:

    --* Is the new index being applied in this query?

-- Right now, our new index on cat_id in the cat_toys table is not explicitly shown in the EXPLAIN QUERY PLAN output. The output still shows 'SCAN TABLE cat_toys' which means SQLite is scanning the cat_toys table (not searching). THis suggests that the new index on cat_id might not be utilized for this query.

-- Basically, SQLite is scanning the cat_toys table and searching the cats table using the primary key index like the first time we ran the query (without the new index)

-- There IS a runtime improvement, but this could be due to other factors.

-- ^ Further Optimization:

-- To veryify that the index is being used and to further optimize our query, we can create a composite index on both the cat_id AND the toy_id columns in the cat_toys table. Like this:

CREATE INDEX idx_cat_toy ON cat_toys(cat_id, toy_id);

-- AFter we create this new composite index, we can run EXPLAIN QUERY PLAN again:

EXPLAIN QUERY PLAN
SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- ^ Second Results:

-- |--SCAN TABLE cat_toys
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)
-- Run Time: real 0.000 user 0.000000 sys 0.000436

-- ^ Analyze Results:

-- It still appears that we are not using the new index (necessarily) because we are scanning the cat_toys table instead of searching with the new index.

-- ^ Further Optimization:

-- We can create an index specificaly on toy_id:

CREATE INDEX idx_toy_id ON cat_toys(toy_id);

EXPLAIN QUERY PLAN
SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- ^ Third Results:

-- |--SEARCH TABLE cat_toys USING INDEX idx_toy_id (toy_id=?)
-- `--SEARCH TABLE cats USING INTEGER PRIMARY KEY (rowid=?)
-- Run Time: real 0.001 user 0.000787 sys 0.000000

-- ^ Analyze Results:

-- The EXPLAIN QUERY PLAN output now shows SEARCH TABLE cat-toys USING INDEX idx_toy_id (toy_id=?), indicating that the index on toy_id is being used. This means that SQLite is using the index to quickly locate rows in the cat_toys table where toy_id is 5 instead of scanning the entire table. WE can see in the timer results that this query is running faster than the initial query.

----------
-- ! Step 4 - Re-time the query using the new index
----------
-- ^ Query (to be used in the sqlite CLI):

SELECT cats.*
FROM cats
JOIN cat_toys ON cats.id = cat_toys.cat_id
WHERE cat_toys.toy_id = 5;

-- ^ Paste your results below (as a comment):

-- 4002|Rachele|Maroon|Foldex Cat
-- 31|Rodger|Lavender|Oregon Rex
-- 77|Jamal|Orange|Sam Sawet
-- Run Time: real 0.001 user 0.000000 sys 0.001038

-- ^ Analyze Results:
    -- * Are you still getting the correct query results?

    -- Yes, we are still getting the same results

    -- * Did the execution time improve (decrease)?

    -- Yes, the execution time did improve. We can see that the index is optimizing the query by reducing the need for full tabl scans and minimizing system calls. This leads to more efficient execution.

    -- * Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------
