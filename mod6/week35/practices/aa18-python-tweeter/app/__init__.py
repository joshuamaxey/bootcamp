"""
This __init__.py file will house the instance of our Flask app

import our config class
create an instance of Flask
configure our Flask instance with the Config class we've imported
"""

from flask import Flask, render_template
from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)


