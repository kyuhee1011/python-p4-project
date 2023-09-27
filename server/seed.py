

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
        ingredients=[
            Ingredient(name="egg, onion, green onion, carrot, salt", 
                       amount="3 or more, 1 Tbsp chopped, 1 Tbsp chopped,1 Tbsp chopped, option",
                       direction="Chopped every ingredients,In a medium bowl crack 3 eggs and add a pinch of salt  then add and mix all ingredients together, Preheat the pan between medium and low heated, Add the egg mixture to the pan and wait until the top or edges begins cooked,Using a spoon with a spatula (or two spatula), lift one end and fold it over and over until nice rolled egg, Place on the cutting board and slice the egg about ¾ or ½ inch thick and enjoy the delicious Korean omelette.")
        ]
        recipes=[
            Recipe(title="Korean rolled egg omeletee",
                   description="It's side dish that is rolled into an omelette mixed with vegetables and some others",
                   duration="20 minutes",
                   serving="2",
                   mealType="Side")
        ]


        db.session.add(users)
        db.session.add(ingredients)
        db.session.add(recipes)
        db.session.commit()
