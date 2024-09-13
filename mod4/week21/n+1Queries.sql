-- ! N + 1 QUERIES

--* Consider these two tables:

CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR
);

CREATE TABLE toys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    cat_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES cats (id)
);

-- If we want to query for all of the cats and all of their cat toys so that we can display them, there are a few ways to go about writing the query.

-- We could potentially query for all of the cats in the database first, using the following SQL:

-- ^ N + 1 Query (not efficient)

SELECT * FROM cats;

-- Lets sah that this query returns 5 cat records. You could then query each cat to get their toys using the following queries: (Note that the same query is repeated 5 times, once for each cat in the table)

SELECT * FROM toys WHERE cat_id = 1; -- Select all records from the toys table where the cat_id is 1
SELECT * FROM toys WHERE cat_id = 2; -- Select all records from the toys table where the cat_id is 2
SELECT * FROM toys WHERE cat_id = 3; -- etc
SELECT * FROM toys WHERE cat_id = 4;
SELECT * FROM toys WHERE cat_id = 5;

-- Using this ethod with 5 cats in the 'cats' table, we have made 5 + 1 (or 6) total queries in order to get all of the cats and each of their toys. If we had 1,000,000 cats in the database table and chose to execute our query this way, we would have to make 1,000,001 queries!

-- Instead, we could chose to get the same data from the database with a single query (Regardless of how many cats are in the table). This requires more planning to construct the SQL command, but vastly increases efficiency:

-- ^ Efficient Query

SELECT cats.*, toys.* FROM cats JOIN toys ON cats.id = toys.cat_id;

-- This single command will:

-- 1. Select all of the cats
-- 2. Select all of the toys
-- 3. Join the records by connecting an individual toy's id with a cat's toy_id

-- In this way we have gotten all of the cats and their associated toys, regardless of the number of cat records present in the database.

-- This works by connecting the 'id' column of the cats table with the 'cat_id' column of the toys table, ensuring that each toy is matched with the correct cat.

-- ! AVOIDING N + 1 QUERIES

-- ^ There are two questions you can ask to determine whether you are making an N + 1 query:

-- 1. How many queries am I making? If the answer is 1, it's not an N + 1 query. If the answer is more than 1, consider question 2:
-- 2. Is the number of queries I'm making dependent on the number of results of the initial query (does the number of quaries increase as the number of records increases)

-- If the answer to question 2 is yes, it's an N + 1 query.

-- * Consider the following table again:

CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR
);

CREATE TABLE toys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    cat_id INTEGER,
    FOREIGN KEY(cat_id) REFERENCES cats(id)
);

--^ This is an N+1 query:

SELECT * FROM cats; -- Returns all 5 cat records

-- Here are the "N" number of follow-up queries based on the number of results from the first query

SELECT * FROM toys WHERE cat_id = 1;
SELECT * FROM toys WHERE cat_id = 2;
SELECT * FROM toys WHERE cat_id = 3;
SELECT * FROM toys WHERE cat_id = 4;
SELECT * FROM toys WHERE cat_id = 5;

--^ And here is the one-query replacement:

SELECT cats.*, toys.*
-- SELECT specifies which columns that you want to retrieve from the database
-- The * wildcard means "all columns." So 'cats.*' selects all columns from the 'cats' table while 'toys.*' selects all columns from the 'toys' table
-- Together, cats.*, toys.* means that the query will retrieve all columns from both the cats and toys tables
FROM cats
-- FROM specifies the primary table from which to retrieve data. In this case, the 'cats' table
JOIN toys ON cats.id = toys.cat_id;
-- 'JOIN toys' specifies that we want to join the 'toys' table with the 'cats' table
-- 'ON cats.id = toys.cat_id' is the condition for the join. It means that the rows from the 'cats' table will be matched with rows from the 'toys' table where the 'id' column in the 'cats' table is equal to the 'cat_id' column in the 'toys' table.

-- In summary, this query retrieves all coluns from both the 'cats' and 'toys' tables, joining the two tabls based on the relationship where a cat's 'id' matches the 'cat_id' in the 'toys' table. This allows you to see each cat along with all of its associated toys in a single result set.

-- * Consider the following example:

CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    body TEXT,
    author_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES authors(id)
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    body TEXT,
    post_id INTEGER,
    author_id INTEGER,
    FOREIGN KEY(post_id) REFERENCES posts(id),
    FOREIGN KEY(author_id) REFERENCES authors(id)
);

-- Note that each post belongs to an author, and a post may have many comments. You want to query the database to figure out how many comments per post a specific author has.

-- ^ Here is our N + 1 query:

SELECT * FROM posts WHERE author_id = ?; -- '?' represents a specific author's id. This query qill select ALL posts from the author

SELECT * FROM comments WHERE post_id = ?; -- '?' here represents the id of a specific post. This query will select ALL comments for each post in the returned results. This is an N+1 query because the command is executed 'N' times, once for each post that is returned.

-- ^ Here is our two-query replacement of the N+1 query:

SELECT * FROM posts WHERE author_id = ?; -- This statement is the same as the initial query above.

SELECT * FROM comments WHERE post_id IN ?; -- Here, '?' represents the collection of ALL of the returned ids of the author's posts. '?' uses the syntax (1,2,3,4). This query will select all comments from all posts associated with the author.

-- The 'IN' keyword allows you to specify a list of values in a single query. For example, if the first query returned the post IDs '1, 2, 3, 4', the second quary will look like this: SELECT * FROM comments WHERE post_id IN (1, 2, 3, 4)

-- So instead of executing a separate query for each post, you execute a single query to retrieve all comments for all posts at one time. This reduces the number of round trips to the database, making the second set of queries much more efficient, especially if dealing with a large number of posts.

-- ^ In summary:

-- The N+1 query executes multiple queries (one for each post)
-- The more efficient query uses the 'IN' keyword to retrieve all relevant comments in a single query, significantly reducing the number of total queries to the database

-- * QUIZ

-- ^ Here is a query:

SELECT * FROM authors;

SELECT * FROM books WHERE author_id = ?; -- '?' represents each author's id in the returned results

-- What approach can we take to avoid a possible N+1 query in the SQL queries above?

-- We can use the JOIN clause to get all of the books along with their respective authors in a single query:

SELECT authors.*, books.*
-- This SELECT statemetn specifies that we want to retrieve all columns from both the authors and books tables
FROM authors
-- The FROM statement indicates that the primary table from which to retrieve data is the authors table.
JOIN books ON authors.id = books.author_id;
-- This JOIN statement joins the 'books' table with the 'authors' table on the condition that the 'id' column in the 'authors' table matches the 'author_id' column in the 'books' table.

-- This query wil return a result set that includes all authors and thier associated books, combining the data from both tables into a single result.
