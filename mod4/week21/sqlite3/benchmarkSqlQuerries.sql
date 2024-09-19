-- ! We can use FOUR STEPS to benchmark our query:

-- 1. Analyze how a query is executing
-- 2. Time a query to get a baseline measure of efficiency
-- 3. Create a new index and analyze how the query is executing
-- 4. Re-time the query using the new index

-- ! STEP 1: Analyze how a query is executing

-- ^ We can use 'EXPLAIN QUERY PLAN [query]' to analyze the execution of our query. This statement will tell us the strategy that SQL is using to execute our query. Specifically, it tells us whether SQL is applying any indexes as it searches for records during query execution.

-- & If the output uses the SCAN keyword, like this:

-- # Query, with no indexes defined
sqlite> EXPLAIN QUERY PLAN SELECT * FROM cookies WHERE type = 'sugar';

-- # Output
SCAN cookies
        SQL is scanning every single record in the cookies table

-- This means that SQL is going through ach row in the table and determining if it should be added to the query results.

-- & If the output uses the SEARCH keyword, on the other hand:

-- # Index definition
sqlite> CREATE INDEX idx_cookies_type ON cookies(type);

-- # Query
sqlite> EXPLAIN QUERY PLAN SELECT * FROM cookies WHERE type = 'sugar';

-- # Output
SEARCH cookies USING INDEX idx_cookies_type (type=?)
        SQL is applying the idx_cookies_type index to only visit sugar cookies

-- & Ask yourself: Is an index being applied to your search? If so, then you likely already have an efficient query. If not, see step 2.

-- ! STEP 2: Time a query to get a baseline measure of efficiency

-- # Turn on the timer
sqlite> .timer on

-- # Execute the query
sqlite> SELECT * FROM cookies WHERE type = 'sugar';

-- # Read the output
...query results printed here
Run Time: real 0.003 user 0.000000 sys 0.000000
Run time is your baseline value for benchmarking the efficiency of the query

-- ! STEP 3: Add an index and repeat step 1 (Analyze how the query is executing [SCAN vs SEARCH])

-- Create a new index for your table, then use EXPLAIN QUERY PLAN to test whether that index is implemented when you execute your queries.

-- ! STEP 4: Re-time the query using the new index

-- Then compare the runtime of the modified query with the runtime of the original query.

-- If it is better, consider returning to step 1 and continuing to optimize by re-executing these 4 steps.

-- IF the new runtime is worse, drop the new index and return to step 3. Consider whether a different indexing approach could help you improve the execution time of your query. 
