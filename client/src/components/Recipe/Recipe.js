import "./Recipe.css";
import React from "react";
import { Container, Card, Row, Button } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({
  user,
  handleDelete,
  setRecipes,
  recipes,
  handleUpdateFavorite,
}) {
  return (
    <Container className="containerCenter">
      <Card className="contentCenter">
        <Row>
          <h2 className="recipeTitle">Share Your Recipes</h2>
        </Row>
        <Card.Body className="contentBody">
          <Row>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <Card.Title className="recipeMainTitle">
                  {recipe.title}
                </Card.Title>
                <Card.Text className="rateColor">
                  Rate: {recipe.review}
                </Card.Text>
                <Card.Img
                  className="imageSize"
                  src={recipe.image_food}
                  alt="My Delicious Food"
                />
                <Card.Text className="recipeDescript">
                  {recipe.description}
                </Card.Text>
                <Card.Text className="recipePrep space">
                  <b>Duration:</b> {recipe.duration}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Serving:</b> {recipe.serving}
                </Card.Text>
                <Card.Text className="recipeDescript">
                  <b>Meal Type:</b> {recipe.mealType}
                </Card.Text>

                <Ingredient recipe={recipe} />
                <div className="cardNext">
                  <Button
                    type="submit"
                    variant={recipe.favorite ? "primary" : "outline-primary"}
                    onClick={() => handleUpdateFavorite(recipe.id)}
                    className="formEdit"
                  >
                    {recipe.favorite ? "♡ Unfavorite" : "❤️ Favorite"}
                  </Button>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    onClick={() => handleDelete(recipe.id)}
                    className="formEdit"
                  >
                    🗑️ Delete
                  </Button>
                </div>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Recipe;
