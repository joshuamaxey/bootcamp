"""
Create a Flask app
get the secret key from the environment
register the Blueprint"""

import os
from flask import Flask
from app import routes

app = Flask(__name__)
app.config.update({'SECRET_KEY': os.environ.get('SECRET_KEY')})
app.register_blueprint(routes.bp)
