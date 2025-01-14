"""
Blueprints help structure our application in a modular way.
Our 'orders' blueprint is a component that handles the order-related routes for our app
"""

from flask import Blueprint

bp = Blueprint("orders", __name__, url_prefix="")

@bp.route("/")
def index():
    return "Order Up!"
