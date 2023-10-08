# Recipe Warehouse

## Description

This website allows user to share their recipe and look on others. Users can look up by pressing recipe button or search in the search bar.

Non-user can view only Home page and not other pages. In order to view or use Recipes, Ingredients, Add Favorite, or Add New Recipe need to SignUp and Log in.

## Quick Start

Clone the repository:
git clone https://github.com/kyuhee1011/python-p4-project.git
Or
git clone git@github.com:kyuhee1011/python-p4-project.git

Open two terminal 1 for Frontend and 1 for Backend.

## Backend

Open Second terminal to run Backend Server

## prerequisites

Python 3.8.13

## Installing/ Getting Started.

Open second terminal
![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/direction2.png)

```ubuntu
cd server
pipenv install
```

Run pipenv shell and then change to correct directory to play.

```ubuntu
pipenv shell
```

```ubuntu
cd server
```

Run pyton seed.py beforehand to seed the database and then python app.py to call backend server.

```ubuntu
python seed.py
python app.py
```
![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/direction3.png)

## Backend Features

Backend has 4 tables

- User
- Recipe
- Ingredient
- recipeIngredient

## Database Relationship Diagram

![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/project%205%20ERD%20.png)


## Front End

![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/direction1.png)


```ubuntu
cd client
npm install
npm start
```
![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/direction4.png)

## Frontend Features

- Good Visual Quality.
- Easy to navigate.
- Have 8 Components and Inclues 6 routes for the Client Side with Login, SignUp, Home, Recipe, MyFav, AddNew.
- Optimized for navigation.
- Responsive Design.

## Video

## Acknowledgment

Recipe images: https://namu.wiki/
https://en.wikipedia.org/wiki/Main_Page

## Demo
