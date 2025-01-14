"""
Create a blueprint
Register the blueprint with the flask application
use the blueprint to make routes
"""

import os
import sqlite3
from flask import Blueprint, render_template

bp = Blueprint('main', __name__, url_prefix='/')

DB_FILE = os.environ.get("DB_FILE")

@bp.route("/")
# def main():
#     """
#     Show the main page
#     Take no arguments
#     return the string, "Calendar Working
#     """
#     return render_template('main.html')
def main():
    """
    Create an SQLite3 connection w/connection parameters
    create a cursor from the connection
    execute "Select id, name, start_datetime, end_datetime
        FROM appointments
        ORDER BY start_datetime;"
    Fetch all of the records
    """
    conn = sqlite3.connect(DB_FILE) # create a connection
    curs = conn.cursor() # create a cursor
    curs.execute("SELECT id, name, start_datetime, end_datetime FROM appointments ORDER BY start_datetime")
    apts = curs.fetchall()
    for apt in apts:
        print(apt)
    return render_template("main.html", rows=apts)
