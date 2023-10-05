from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy import ForeignKey, CheckConstraint

from config import db, bcrypt

# Models go here!

#many to many table
recipeIngredient=db.Table(
    'recipe_ingredient',
    db.Column('recipe_id', db.Integer,  db.ForeignKey('recipes.id')),
    db.Column('ingredient_id', db.Integer,  db.ForeignKey('ingredients.id')),
    
)
favorite = db.Table(
    'favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id'))
)

#one to many table
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    __table_args__ = (
        db.CheckConstraint('length(username) >= 3'),
    )
    #"-" means not/don't want to include/show
    serialize_rules = ('-recipes.user','-_password_hash')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash=db.Column(db.String)
    firstName = db.Column(db.String)
    lastName=db.Column(db.String)
    
  
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
                username: {self.username}'
    
class Ingredient(db.Model,SerializerMixin):
    __tablename__='ingredients'
    serialize_rules = ('-recipes.ingredients',)
    
    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String)
    direction=db.Column(db.String)

    recipes = db.relationship('Recipe', secondary=recipeIngredient, back_populates="ingredients")

    def __repr__(self):
        return f'id: {self.id}, \
                ingredient_name: {self.name}, \
                direction:{self.direction}' 

    

class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'
    serialize_rules = ('-user.recipes', '-ingredients.recipes')

    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String)
    image_food=db.Column(db.String)
    description=db.Column(db.String)
    duration=db.Column(db.String)
    serving=db.Column(db.String)  
    review=db.Column(db.Integer)
    mealType=db.Column(db.String)
    user_id =db.Column(db.Integer, db.ForeignKey('users.id'))
    ingredients=db.relationship("Ingredient", secondary=recipeIngredient, back_populates="recipes")

    def __repr__(self):
        return f'id: {self.id}, \
                name: {self.title}, \
                image: {self.image_food}\
                description:{self.description}\
                duration:{self.duration}\
                serving:{self.serving}\
                review:{self.review}\
                mealType:{self.mealType}'
                
    
