from flask import Flask
from config import Config

app = Flask(__name__)

# app.config["greeting"] = 'Hey there, Humans!'
app.config.from_object(Config)

print("SECRET KEY IS: ", app.config["SECRET_KEY"])

@app.route('/')
def hello():
    # return '<h1>Hello, world!</h1>'
    return f'<h1>{app.config["GREETING"]}</h1'

# ! To start application, run 'pipenv run flask run' in terminal!
