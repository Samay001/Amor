from flask_restx import Resource, Namespace


auth = Namespace('Auth', description='Handles user authentication')


@auth.route('/login')
class Login(Resource):
    def get(self):
        return {'message': 'Login page'}
    