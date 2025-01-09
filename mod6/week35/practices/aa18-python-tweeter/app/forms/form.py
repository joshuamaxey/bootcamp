"""
This form is for creating new tweets
It will include a Tweet form class
"""

from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class TweetForm(FlaskForm):
    """
    Tweet form class should have fields for author, tweet, and a submit button
    Author and tweet are required
    Submit button needs to be labeled 'Create Tweet'
    """
    author = StringField('Author', validators=[DataRequired()])
    tweet = StringField('Tweet', validators=[DataRequired()])
    submit = SubmitField('Create Tweet')
