import React from "react";
import "./MyFav.css";
import Ingredient from "../Ingredient/Ingredient";
import { Container, Row, Button } from "react-bootstrap";

function MyFav({ user, recipes, handleUpdateFavorite }) {
  const recipeFilterArray = recipes.filter((recipe) => {
    return recipe.favorite === true;
  });

  return (
    <Container>
      <Row>
        <h3 className="recipeTitle">My Favorite Recipes</h3>
      </Row>

      <Row>
        {recipeFilterArray.map((recipe) => (
          <div key={recipe.id}>
            <h3 className="recipeMainTitle">{recipe.title}</h3>

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
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default MyFav;
