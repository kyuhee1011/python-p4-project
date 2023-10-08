import React from "react";
import "./MyFav.css";
import Ingredient from "../Ingredient/Ingredient";
import { Container, Row, Button, Card } from "react-bootstrap";

function MyFav({ user, recipes, handleUpdateFavorite }) {
  const recipeFilterArray = recipes.filter((recipe) => {
    return recipe.favorite === true;
  });

  return (
    <Container className="containerCenter">
      <Card className="contentCenter">
        <Row>
          <h3 className="recipeTitle">My Favorite Recipes</h3>
        </Row>
        <Card.Body className="contentBody">
          <Row>
            {recipeFilterArray.map((recipe) => (
              <div key={recipe.id}>
                <Card.Title className="recipeMainTitle">
                  {recipe.title}
                </Card.Title>

                <Card.Img
                  className="imageSize"
                  src={recipe.image_food}
                  alt="My Delicious Food"
                />
                <Card.Text className="recipeDescript">
                  {recipe.description}
                </Card.Text>
                <Card.Text className="recipeDescript">
                  <b>Duration:</b> {recipe.duration}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Serving:</b> {recipe.serving}
                </Card.Text>
                <Card.Text className="recipeDescript">
                  <b>Meal Type:</b>
                  {recipe.mealType}
                </Card.Text>

                <Ingredient recipe={recipe} />

                <Button
                  type="submit"
                  variant={recipe.favorite ? "primary" : "outline-primary"}
                  onClick={() => handleUpdateFavorite(recipe.id)}
                  className="formEdit"
                >
                  {recipe.favorite ? "♡ Unfavorite" : "❤️ Favorite"}
                </Button>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyFav;
