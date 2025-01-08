from flask import Flask, render_template
from config import Config

# ! None of this shit works, none of these versions of add-ons are fucking compatible with one another.

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def index():
    return '<h1>Simple App</h1><a href="/form">Form</a>'

@app.route('/form')
def form():
    return render_template('form.html')

# NOTE: had to run "pipenv run pip install markupsafe==2.0.1" in the terminal to downgrade to a version of markupsafe that is compatible with our version of Jinja2 so that we are able to start the application via 'pipenv run flask run'
