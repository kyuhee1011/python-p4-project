
# Remote library imports
from flask import request, make_response, request, jsonify, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
# Add your model imports
from models import User, Recipe, Ingredient, recipeIngredient
    
class CheckSession(Resource):

    def get(self):
        user_id = session.get('user_id')

        if not user_id:
            return {'error' : 'Unauthorized'}, 401
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200
        
        return {}, 204
    

class SignUp(Resource):
    def post(self):
        data = request.get_json()

        new_user=User(
            username = data['username'],
            firstName=data['firstName'],
            lastName=data['lastName']
           
        )
        
        new_user.password_hash = data['password']  
        try:
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return new_user.to_dict(), 201
        except IntegrityError:
            return {'error': 'Try other username'}, 400
        
class Login(Resource):
    def post(self):
        request_login=request.get_json()
        username = request_login['username']
        password = request_login['password']
        user = User.query.filter(User.username == username).first()
        
        if user and user.authenticate(password):
            print("print")
            session['user_id'] = user.id
            return user.to_dict(), 201
        return {'errors':'Invalid username/password'}, 401
        
class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)
        return {'message':'Thank you, See You Again!'}, 204  
   
class RecipeAll(Resource):
    def get(self):
        #getting all recipes for non user on Home page
              
        data_meals=Recipe.query.all()
        
        all_recipe=[recipe.to_dict()for recipe in data_meals]
        return make_response(jsonify(all_recipe),200)

    def post(self):
    #updates/Add new recipes in Add New page
        if session.get('user_id'):
            new_form=request.get_json()
            try:
                new_recipe= Recipe(
                    title=new_form["title"],    
                    image_food=new_form["image_food"],
                    description=new_form["description"],
                    duration=new_form["duration"],
                    serving=new_form["serving"], 
                    review=int(new_form["review"]),
                    mealType=new_form["mealType"]
                )

                new_ingredient = Ingredient(
                    name=new_form['name'],
                    direction=new_form['direction']
                )
            
            
                new_recipe.ingredients.append(new_ingredient)
       
                db.session.add(new_recipe)
                db.session.commit()

                recipe_dict=new_recipe.to_dict()
               
                response=make_response(jsonify(recipe_dict),
                                201
                )
                return response
            except IntegrityError:
                return {'error': 'Unprocessable Entity'}, 422
           
        return{'error':'You must logged in'},401
    
    def delete(self):
        recipe = Recipe.query.get(id) 
      
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return {'message':'Delete successfully'}, 204
        else:
            return {'errors':'Bad request'}, 400
    
class IngredientAll(Resource):
    def get(self):
   #getting all incredients for users only because user && in App.js
        data_ingredient=Ingredient.query.all()
        all_ingredient=[ingredient.to_dict()for ingredient in data_ingredient]
      
        return make_response(jsonify(all_ingredient),200)
  

class RecipeById(Resource):
    def get(self, id):
        recipe=Recipe.query.filter(Recipe.id==id).first
      
        if recipe: 
            return recipe.to_dict(), 200
        else:
            return {'errors': 'user not found'},404
    
    
    def delete(self,id):
        recipe=Recipe.query.filter(Recipe.id==id).first()
      
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return {'message':'Delete successfully'}, 204
        else:
            return {'errors':'Bad request'}, 400
        

    
class RecipeResource(Resource):

    def patch(self, recipe_id):
        recipe = Recipe.query.filter_by(id=recipe_id).first()
        if recipe:
            recipe.favorite = not recipe.favorite
            db.session.commit()
            return recipe.to_dict(), 200
        else:
            return {"message": "Recipe not found"}, 404

  

api.add_resource(CheckSession, '/check_session')
api.add_resource(SignUp, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(RecipeAll, '/recipe_all')
api.add_resource(RecipeResource, '/recipe/<int:recipe_id>')
api.add_resource(RecipeById, '/recipe_all/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

