import "./Home.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
function Home({ recipes, setRecipes }) {
  useEffect(() => {
    fetch(`/recipe_all`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <Container className="containerCenter">
      
      
        <h2 className="recipeTitle">Home page</h2>
        <Card className="contentCenter">
        <Card.Body className="contentBody">
          {recipes.map((recipe) => (
            <div key={recipe.id} style={{ height: "auto", width: "30rem" }}>
              <Card.Title className="recipeMainTitle">
                {recipe.title}
              </Card.Title>
              <Card.Img
                variant="top"
                className="imageSize"
                src={recipe.image_food}
                alt="My Delicious Food"
              />
              <div className="cardText">
                <Card.Text className="recipeDescript">
                  {recipe.description}
                </Card.Text>
              </div>
            </div>
          ))}
        </Card.Body>

        <div className="centerText cardText">
          <p>
            To check detail information about recipes, please click the button
            to login
          </p>

          <Link to="/login">
            <Button
              className="buttonBottom"
              variant="outline-primary"
              size="md"
            >
              Login
            </Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
}

export default Home;
