import os

class Config(object):
    GREETING = 'Salutations, humans!'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'
