# render_template allows us to import HTML templates from templates directory
from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
print(app.config['SECRET_KEY'])

@app.route('/')
def index():
    """
    render the 'index.html' template from in the templates directory
    Notice the use of the template variable 'sitename'
    """
    return render_template('index.html', sitename='Demo Site', page='Home')

@app.route('/test')
def home():
    # Directly tell flask what to render at this url
    return '<h1>Test</h1>'

@app.route('/about')
def about():
    return render_template('index.html', sitename='Demo Site', page='About')

@app.route('/item/<id>')
def item(id):
    # render dynamic url parameters
    return f'<h1>Item {id}</h1>'

# We can use the following decorator to run code BEFORE every requrest is handled:

@app.before_request
def before_request_function():
    print("before_request is running!")

# Flask aslso has an after_request decorating for closing a database conection
# or for executing other actuions after each request completes
# note that it must take and use a 'repsponse' parameter

@app.after_request
def after_request_function(response):
    print("after_request is running")
    return response
