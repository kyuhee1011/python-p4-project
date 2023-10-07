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
    <Container>
      <h2 className="recipeTitle">Home page</h2>

      <Card className="contentCenter" style={{ width: "25rem", margin: "1%" }}>
        <Card.Body style={{ height: "48vh" }}>
          {recipes.map((recipe) => (
            <div key={recipe.id} style={{ height: "100%", width: "100%" }}>
              <Card.Title className="recipeMainTitle">
                {recipe.title}
              </Card.Title>
              <Card.Img
                variant="top"
                className="imageSize"
                src={recipe.image_food}
                alt="My Delicious Food"
              />
              <Card.Text className="recipeDescript">
                {recipe.description}
              </Card.Text>
            </div>
          ))}

          <p>
            To check detail information about recipes, please click the button
            to login
          </p>

          <Link to="/login">
            <Button variant="outline-primary" size="md">
              Login
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
