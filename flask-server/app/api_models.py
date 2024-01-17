from .extensions import my_api
from flask_restx import fields


auth_model = my_api.model('Login', {
    "email": fields.String(required=True, description="Email"),
    "password": fields.String(required=True, description="Password")
})