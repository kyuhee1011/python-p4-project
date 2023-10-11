# Recipe Warehouse

You can click here to visit Website
https://recipe-warehouse.onrender.com/

or follow the instruction below.

## Description

This website allows user to share their recipe and look at others. Users can look it up by pressing the recipe button or searching in the search bar. Also, they can add their recipe to share with others

Non-users can view only the Home page and not other pages. In order to view or use Recipes, Ingredients, Add Favorite, or Add New Recipe need to sign up and Log in.

## Quick Start

Clone the repository:
git clone https://github.com/kyuhee1011/python-p4-project.git
Or
git clone git@github.com:kyuhee1011/python-p4-project.git

Open two terminals 1 for Frontend and 1 for Backend.

## Backend

Open the terminal to run the Backend Server

## prerequisites

Python 3.8.13

## Installing/ Getting Started.

On other terminal
![git hub code](https://github.com/kyuhee1011/python-p4-project/blob/main/client/assets/direction2.png)

```ubuntu
cd server
pipenv install
```

Run pipenv shell and then change to the correct directory to play.

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

## Frontend Quick Start

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
- Have 8 Components and includes 6 routes for the Client Side with Login, SignUp, Home, Recipe, MyFav, AddNew.
- Optimized for navigation.
- Responsive Design.

## Video

https://youtu.be/_Nl-w4yQe14

## Acknowledgment

Recipe images: https://namu.wiki/
https://en.wikipedia.org/wiki/Main_Page

## Full instruction Demo video

https://youtu.be/Zab_3bnWKvY
