

# Local imports
from app import app
from models import User, Ingredient, Recipe
from config import db

if __name__ == '__main__':
   
    with app.app_context():
        User.query.delete()
        Ingredient.query.delete()
        Recipe.query.delete()

        users=[]
        ingredients=[]
        recipes=[]


        db.session.add(users)
        db.session.add(ingredients)
        db.session.add(recipes)
        db.session.commit()
