# Sqlite3 CLI Basics

>Install SQLite3 CLI using the following command in your terminal:

*sudo apt install sqlite3*

Now SQLite3 should be installed.

>Open a transient, in-memory database in your terminal that you can interact with using SQL commands by running the following command in your terminal:

*sqlite3*

The response to this command in your terminal should look like this:

*SQLite version 3.31.1 2020-01-27 19:55:54 <br>
Enter ".help" for usage hints.<br>
Connected to a transient in-memory database.<br>
Use ".open FILENAME" to reopen on a persistent database.<br>
sqlite>*

The '**sqlite>**' is how you know that you are now able to run SQL statements and SQLite3 commands.

>Run '**.help**' to see the available commands and statements that you can run

*.tables* allows you to view th elist of tables

*.schema table_name* allows you to view the name of the table whose schema you want to view (replace table_name with the name of the table)

*ctrl+D* to exit the CLI

*.headers on* to turn on headers so that you can see column naems for any query result returned in the SQLite3 CLI
