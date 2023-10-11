

# Local imports
from app import app
from models import User, Ingredient, Recipe,recipeIngredient
from config import db
import ipdb

if __name__ == '__main__':
   
    with app.app_context():
        db.session.query(recipeIngredient).delete()
        
        Recipe.query.delete()
        User.query.delete()
        Ingredient.query.delete()
        
       
        

        users =[ 
            User(username="kyuhelee",  firstName="kyuhee",lastName="Lee" ),
            User(username="raylee", firstName="ray", lastName="lee")
        ]
        users[0].password_hash='k1234'
        users[1].password_hash='r1234'
        db.session.add_all(users)
        db.session.commit()
            

        recipe1= Recipe(title="Korean Rolled Egg Omelette",
                   image_food="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gyeran-mari.jpg/330px-Gyeran-mari.jpg",
                   description="It's side dish that is rolled into an omelette mixed with vegetables and some others",
                   duration="20 minutes",
                   serving="2",
                   favorite=False,
                   review=3,
                   mealType="Side", 
                   user_id=users[0].id)
        recipe2=Recipe(title="Korean Fried Zucchini",
                   image_food="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hobak_Jeon%2C_etc.jpg/405px-Hobak_Jeon%2C_etc.jpg",
                   description="It's side dish that refers to pan-fried",
                   duration="40 minutes",
                   serving="4",
                   favorite=True,
                   review=3,
                   mealType="Side",
                   user_id=users[1].id)
        recipes=[recipe1,recipe2]

        ingredient1= Ingredient( name="3 egg, 1 Tbsp chopped onion, 1 Tbsp chopped green onion, 1 Tbsp chopped carrot, salt (option)", 
                       direction="Chopped every ingredients,In a medium bowl crack 3 eggs and add a pinch of salt  then add and mix all ingredients together, Preheat the pan between medium and low heated, Add the egg mixture to the pan and wait until the top or edges begins cooked,Using a spoon with a spatula (or two spatula), lift one end and fold it over and over until nice rolled egg, Place on the cutting board and slice the egg about ¾ or ½ inch thick and enjoy the delicious Korean omelette.")
        ingredient2= Ingredient(name="1 Korean zucchini, 3 egg, 1/3 cups or more Korean pancake powder, Sea salt",
                       direction="Cut zucchini into 1/3 or ¼ inch slices and lay them down on a plate. Lightly sprinkle the salt all over zucchini slices before adding another layer of it. Leave them for 30 min or more. Put 1/3 cup or more Korean pancake powder on a plate. On another side, add and stir eggs with a pinch of salt in a small bowl. Coat nice and thin layer the zucchini on both sides with Korean pancake powder and set aside. Preheat the Pan with oil between medium and high heat. (Beside the pan put coated zucchinis and egg) Lower the heat before placing zucchinis. Grab each flour zucchini and dip into the egg to give extra egg coated and then put it in the pan. When the edges of the egg turn light brown, turn them over to cook another side. After finishing all pancake, place them on the plate to enjoy. You can serve them with roasted sesame seeds on the top or not.")
        ingredients=[ingredient1,ingredient2]      
        
        recipe1.ingredients.append(ingredient1)
        recipe2.ingredients.append(ingredient2)
        
        recipes=[recipe1,recipe2]    
            
       
        db.session.add_all(ingredients)
        db.session.add_all(recipes)
        db.session.commit()
      