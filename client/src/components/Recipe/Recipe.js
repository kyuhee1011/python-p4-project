import React from "react";
import "./Recipe.css";

// import { useFormik } from 'formik';
import { Container, Row, Button } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({
  user,
  onAddFavorite,
  handleDelete,
  setRecipes,
  recipes,
  handleUpdateFavorite,
}) {
  return (
    <Container>
      <Row>
        <h2 className="recipeTitle">Share Your Recipes</h2>
      </Row>

      <Row>
        <h3 className="recipeTitle">Enjoy your meal</h3>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3 className="recipeMainTitle">{recipe.title}</h3>
            <p className="rateColor">{recipe.review}</p>
            <img src={recipe.image_food} alt="My Delicious Food" />
            <p className="recipeDescript">{recipe.description}</p>
            <p>{recipe.duration}</p>
            <p>{recipe.serving}</p>
            <p>{recipe.mealType}</p>

            <Ingredient recipe={recipe} />

            <Button
              type="submit"
              variant={recipe.favorite ? "primary" : "outline-primary"}
              onClick={() => handleUpdateFavorite(recipe.id)}
              className="formEdit"
            >
              {recipe.favorite ? "unfavorite" : "favorite"}
            </Button>
            <Button
              type="submit"
              variant="outline-primary"
              onClick={() => handleDelete(recipe.id)}
              className="formEdit"
            >
              Delete
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Recipe;
