"""
Create a blueprint
Register the blueprint with the flask application
use the blueprint to make routes
"""

from flask import Blueprint, render_template

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route("/")
def main():
    """
    Show the main page
    Take no arguments
    return the string, "Calendar Working
    """
    return render_template('main.html')
