from flask import Flask
from .extensions import db, migrate, api
from .api.auth import auth                                                                                          

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True 
    
    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)
    
    api.add_namespace(auth, path='/api/auth')

    return app