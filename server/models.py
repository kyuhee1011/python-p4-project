from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import ForeignKey

from config import db, bcrypt

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash=db.Column(db.String)
    first_name = db.Column(db.String)
    last_name=db.Column(db.String)
    image_me=db.Column(db.String)
  
    recipes = db.relationship('Recipe', backref='user')

    @hybrid_property
    def password_hash(self):
        raise AttributeError

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'id: {self.id}, \
                username: {self.username}, \
                profile_image: {self.image_me}'