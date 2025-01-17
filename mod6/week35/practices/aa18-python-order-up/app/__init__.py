from flask import Flask
from .config import Configuration
from .models import db, Employee # import 'db' from our app/models.py file
from .routes import orders
from flask_login import LoginManager

app = Flask(__name__) # instantiate an instance of the Flask app
app.config.from_object(Configuration)
app.register_blueprint(orders.bp)
db.init_app(app) # configure app to use SQLAlchemy

login = LoginManager(app)
login.login_view = "session.login"

@login.user_loader
def load_user(id):
    return Employee.query.get(int(id))

