#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, request, jsonify, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

# Local imports
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
            password = data['password'],
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
            session['user_id'] = user.id
            return user.to_dict(), 201
        return {'errors':'Invalid username/password'}, 401
        
class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)
        return {'message':'Thank you, See You Again!'}, 204  
        
 
    
class RecipeAll(Resource):
    def get(self):
              
        data_meals=Recipe.query.all()
        
        all_recipe=[recipe.to_dict()for recipe in data_meals]
        return make_response(jsonify(all_recipe),200)

    def post(self):

        if session.get('user_id'):
        # user login filter
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
                response_data = {
                        "recipe": recipe_dict,
                        }
                response=make_response(jsonify(response_data),
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
        #login filter
    #     # request_login=request.get_json()
    #     # username = request_login['username']
    #     # user = User.query.filter(User.username == username).first()
        data_ingredient=Ingredient.query.all()
        all_ingredient=[ingredient.to_dict()for ingredient in data_ingredient]
      
        return make_response(jsonify(all_ingredient),200)
  

    def post(self):
        new_form=request.get_json()
    
        new_ingredient=Ingredient(
            name=new_form["name"],
            direction=new_form["direction"]
        )
   
        db.session.add(new_ingredient)
        db.commit()

        ingredient_dict=new_ingredient.to_dict()
        response_ingredient = {
              "ingredient": ingredient_dict
            }
        response=make_response(jsonify(response_ingredient),
                               201
        )
        return response
    


# class RecipeMember(Resource):
#     def get(self):
#         user = User.query.get(id)
      
#         if user:
#             recipes = [recipe.to_dict() for recipe in user.recipes]
#             ingredients = [ingredient.to_dict() for ingredient in user.ingredients]
#             response_data = {
#                 "user": user.to_dict(),
#                 "recipes": recipes,
#                 "ingredients": ingredients
#             }
#             return response_data, 200
#         else:
#             return {'errors': 'user not found'},404
    
#     def post(self):
#         request_json=request.get_json()
#         user = User.query.get(id)
#         # ingredient=Ingredient.query.all()
#         # checking if the request data is valid before adding a new ingredient
#         if user and 'name' in request_json and 'direction' in request_json:
#             new_ingredient = Ingredient(
#                 name=request_json['name'],
#                 direction=request_json['direction']
#             )
#             # user.ingredients.append(new_ingredient) 
#         # if user and all(key in request_json for key in ('title', 'image_food', 'description', 'duration', 'serving', 'review', 'mealType')):
#         required_fields = ['title', 'image_food', 'description', 'duration', 'serving', 'review', 'mealType']

#         if all(field in request_json for field in required_fields):
#             new_recipe=Recipe(
#                 title=request_json['title'],
#                 image_food=request_json['image_food'],
#                 description=request_json['description'],
#                 duration=request_json['duration'],
#                 serving=request_json['serving'],
#                 review=request_json['review'],
#                 mealType=request_json['mealType']
#             )


#             user.recipes.append(new_recipe) 
            

#             db.session.add(new_recipe)
#             db.session.add(new_ingredient)
#             db.session.commit()
#             return new_recipe.to_dict(), 201
#         else:
#             return {'errors':'unprocessable entity'}, 422
    
#     def delete(self,id):
#         recipe = Recipe.query.get(id) 
      
#         if recipe:
#             db.session.delete(recipe)
#             db.session.commit()
#             return {'message':'Delete successfully'}, 204
#         else:
#             return {'errors':'Bad request'}, 400

class MyFavorites(Resource):
    def post(self, user_id, recipe_id):
        user = User.query.filter(id==user_id).first()
        recipe = Recipe.query.filter(id==recipe_id).first()
       
        if user and recipe:
                user.favorite.append(recipe)
                db.session.commit()
                return recipe.to_dict(), 200
        return {'errors':'invalid username/recipe entered'}, 401
        
        
    def delete(self, user_id, recipe_id):

        user = User.query.filter(id==user_id).first()
        recipe = Recipe.query.filter(id==recipe_id).first()
       
            
        if user and recipe:
            user.favorite.remove(recipe)
            db.session.commit()
            return recipe.to_dict(), 200
        return {'errors':'invalid username/recipe entered'}, 401     



api.add_resource(MyFavorites, '/favorites/<int:user_id>/<int:recipe_id>')
api.add_resource(CheckSession, '/check_session')
api.add_resource(SignUp, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(RecipeAll, '/recipe_all')
api.add_resource(IngredientAll, '/ingredient_all')
# api.add_resource(RecipeDetail, '/recipeDetail/<int:recipe_id>')
# api.add_resource(RecipeMember, '/recipe_member')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

