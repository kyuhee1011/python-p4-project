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
        user_id = session['user_id']

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
        if not session['user_id']:
            return {'errors':'invalid username/password'}, 401

        if user and user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 201
        
class Logout(Resource):
    def delete(self):
        if not session['user_id']:
            return {'error': 'Unauthorized access'}, 401
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204  
    
class RecipeAll(Resource):
    pass
class RecipeMember(Resource):
    pass

# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'
api.add_resource(CheckSession, '/check_session')
api.add_resource(SignUp, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(RecipeAll, '/recipe_all')
api.add_resource(RecipeMember, '/recipe_member')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

