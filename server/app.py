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
            image_url = data['image_url']
        )
        
        new_user.password_hash = data['password']  
        try:
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return new_user.to_dict(), 201
        except IntegrityError:
            return {'error': '400 Username already exist'}, 400
        
class Login(Resource):
    def post(self):
        request_login=request.get_json()
        username = request_login['username']
        password = request_login['password']
        user = User.query.filter(User.username == username).first()
        if not session.get('user_id'):
            return {'errors':'invalid username/password'}, 401

        if user and user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 201
        
class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)
        return {}, 204  
        
 
    
class RecipeAll(Resource):
    def get(self):
              
        data_meals=Recipe.query.all()
        all_recipe=[recipe.to_dict()for recipe in data_meals]
        return make_response(jsonify(all_recipe),200)

    def post(self):
        new_form=request.get_json()
        new_recipe= Recipe(
            name=new_form["name"],    
            image_food=new_form["image_food"],
            description=new_form["description"],
            duration=new_form["duration"],
            serving=new_form["serving"], 
            review=new_form["review"],
            mealType=new_form["mealType"]
        )
        # new_ingredient=Ingredient(
        #     name=new_form["name"],
        #     amount=new_form["amount"],
        #     direction=new_form["direction"]
        # )
        db.session.add(new_recipe)
        # db.session.add(new_ingredient)
        db.commit()

        recipe_dict=new_recipe.to_dict()
        # ingredient_dict=new_ingredient.to_dict()
        response_data = {
                "recipe": recipe_dict,
                # "ingredient": ingredient_dict
            }
        response=make_response(jsonify(response_data),
                               201
        )
        return response
    
class IngredientAll(Resource):
    def get(self):
        request_login=request.get_json()
        # username = request_login['username']
        # user = User.query.filter(User.username == username).first()
        data_ingredient=Ingredient.query.all()
        all_ingredient=[ingredient.to_dict()for ingredient in data_ingredient]
      
        # if not user:
        #     return {'errors':'User not found'}, 404
        # else:
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

class RecipeMemberById(Resource):
    def get(self,id):
        user = User.query.filter(User.id==id).first()
      
        if user:
            recipes = [recipe.to_dict() for recipe in user.recipes]
            ingredients = [ingredient.to_dict() for ingredient in user.ingredients]
            response_data = {
                "user": user.to_dict(),
                "recipes": recipes,
                "ingredients": ingredients
            }
            return response_data, 200
        else:
            return {'errors': 'recipe not found'},404
    
    def post(self, id):
        request_json=request.get_json()
        user = User.query.get(id)
        ingredient=Ingredient.query.all()
        # checking if the request data is valid before adding a new ingredient
        if user and 'name' in request_json and 'direction' in request_json:
            new_ingredient = Ingredient(
                name=request_json['name'],
                direction=request_json['direction']
            )

            user.ingredients.append(new_ingredient) 
            db.session.add(new_ingredient)
            db.session.commit()
            return new_ingredient.to_dict(), 201
        else:
            return {'errors':'unprocessable entity'}, 422
    
    def delete(self,id):
        ingredient=Ingredient.query.get(id)
        if ingredient:
            db.session.delete(ingredient)
            db.session.commit()
            return '', 204
        else:
            return {'errors':'Bad request'}, 400
class UserIndex(Resource):
    def get(self, username):
        user=User.query.filter(User.id ==username).first()
        if user:
            return user.to_dict(), 200
        else:
            return {'errors': 'user not found'}, 404
class MyFavorites(Resource):
    def post(self, user_id, recipe_id):
        user = User.query.filter(id==user_id).first()
        recipe = Recipe.query.filter(id==recipe_id).first()
        if not session.get('user_id'):
            return {'errors':'invalid username/recipe entered'}, 401
        if user and recipe:
                user.favorite.append(recipe)
                db.session.commit()
                return recipe.to_dict(), 200
        
        
    def delete(self, user_id, recipe_id):

        user = User.query.filter(id==user_id).first()
        recipe = Recipe.query.filter(id==recipe_id).first()
        if not session.get('user_id'):
            return {'errors':'invalid username/recipe entered'}, 401
            
        if user and recipe:
            user.favorite.remove(recipe)
            db.session.commit()
            return recipe.to_dict(), 200          


# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'
api.add_resource(UserIndex, '/users/<string:username>')
api.add_resource(MyFavorites, '/favorites/<int:user_id>/<int:recipe_id>')
api.add_resource(CheckSession, '/check_session')
api.add_resource(SignUp, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(RecipeAll, '/recipe_all')
api.add_resource(IngredientAll, '/ingredient_all')
api.add_resource(RecipeMemberById, '/recipe_member/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

