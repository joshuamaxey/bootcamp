"""
This __init__.py file will house the instance of our Flask app

import our config class
create an instance of Flask
configure our Flask instance with the Config class we've imported
"""

import random
from flask import Flask, render_template
from app.config import Config
from app.tweets import tweets

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def home():
    """
    randomly pick a tweet from the tweets dictionary in the tweets.py file
    render the index.html template (already created) in the templates folder
    """
    tweet = random.choice(tweets) # randomly select a tweet

    return render_template('index.html', tweet=tweet) # pass the tweet to the template

@app.route('/feed')
def feed():
    """
    get all of the tweets
    send them to the feed.html template (already created)
    have feed.html template inherit from the base.html template (like we did for home)

    iterate through the list in the template
    display the information for each tweet
    """

    return render_template('feed.html', tweets=tweets) #pass the tweets list to the template
