from ..extensions import db


class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    date_of_birth = db.Column(db.Date)
    gender = db.Column(db.String(80))
    description = db.Column(db.String(80))
    updated_at = db.Column(db.DateTime, default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    