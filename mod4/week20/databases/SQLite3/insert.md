# SQLite3 INSERT

>Set up the following table:

**CREATE TABLE friends** ( <br>
    **id** INTEGER **PRIMARY KEY** AUTOINCREMENT,<br>
    first_name **VARCHAR(255)** NOT NULL,<br>
    last_name **VARCHAR(255)** NOT NULL<br>
);

>Use the following syntax to insert data into the table:

**INSERT INTO** table_name<br>
VALUES<br>
**(column1_value**, column2_value, **column3_value)**;

>For our "friends" table, we can insert the following:

**INSERT INTO** friends **(id**, first_name, **last_name)**<br>
VALUES<br>
**(1**, 'Amy', **'Pond')**;

- Note the use of single quotes for string values
- Also note that the *AUTOINCREMENT* constraint on **id** means we don't need to specify the value of the ID. It will automatically start at 1 and increment every time we add a new row. We CAN, however, choose to specify it anyway if we want and SQLite3 will continue incrementing from the last row's ID.

>We can also insert multiple values at one time:

**INSERT INTO** friends **(first_name**, last_name)<br>
VALUES<br>
**('Rose'**, 'Tyler')<br>
('Martha', **'Jones')**<br>
**('Donna'**, 'Noble')<br>
('River', **'Song')**;

>Now verify that your data was correctly inserted using the following command in your CLI:

*SELECT * FROM friends;*

This command should show you the following in the terminal:

**1|Amy|Pond<br>
2|Rose|Tyler<br>
3|Martha|Jones<br>
4|Donna|Noble<br>
5|River|Song<br>**
