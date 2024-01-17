from flask_restx import Resource, Namespace
from ..api_models import auth_model
from ..models import User
from werkzeug.security import generate_password_hash, check_password_hash
from ..extensions import db

auth = Namespace('Auth', description='Handles user authentication')


@auth.route('/login')
class Login(Resource):
    @auth.expect(auth_model)
    def post(self):
        user = User.query.filter_by(email=auth.payload['email']).first()
        if not user:
            return {"message": "User not found"}, 404
        elif not check_password_hash(user.password_hash, auth.payload['password']):
            return {"message": "Incorrect password"}, 400
        else:
            return {"message": "Logged in successfully"}, 201
        

@auth.route('/register')
class Register(Resource):
    @auth.expect(auth_model)
    def post(self):
        user = User.query.filter_by(email=auth.payload['email']).first()
        if user:
            return {"message": "User already exists"}, 400
        else:
            secure_password = generate_password_hash(
                auth.payload['password'], 
                method='pbkdf2:sha256', 
                salt_length=10
            )
            new_user = User(
                email=auth.payload['email'],
                password_hash=secure_password,
            )
            db.session.add(new_user)
            db.session.commit()
            return {"message": "User created successfully"}, 201
    