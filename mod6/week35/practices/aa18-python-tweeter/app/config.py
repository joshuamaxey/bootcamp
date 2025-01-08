"""
Our config.py file will store all of our environmental variable imports
Includes a Config class which sets the SECRET_KEY to the key located in the .env file
"""

import os

class Config:
    """
    Look for the SECRET_KEY in our .env files
    If it is not found, use hardcoded value (placehodler) instead
    """
    SECRET_KEY = os.environ.get('SECRET_KEY') or "placeholder"
