"""
Instead of setting FLASK_APP=app in the .flaskenv file,
we are setting FLASK_APP=run.py,
then making this file the entry point for our application

This approach offers more control and flexibility,
and prevents circular imports
"""

from app import app

if __name__ == "__main__":
    app.run(debug=True)
