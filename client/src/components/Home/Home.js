import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Container, Button } from "react-bootstrap";
function Home({ recipes, setRecipes }) {
  // const [main, setMain] = useState([]);

  useEffect(() => {
    fetch(`/recipe_all`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <Container>
      <div>
        <h2 className="recipeTitle">Home page</h2>
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h3 className="recipeMainTitle">{recipe.title}</h3>
              <img src={recipe.image_food} alt="My Delicious Food" />
              <p className="recipeDescript">{recipe.description}</p>
            </div>
          ))}
        </div>
        <p>
          To check detail information about recipes, please click the button to
          login
        </p>
      </div>
      <Link to="/login">
        <Button variant="outline-primary" size="md">
          Login
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
