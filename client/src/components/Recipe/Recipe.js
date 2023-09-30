import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Row } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({ user }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/recipe_all")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <Container>
      <Row>
        <h2>Share Your Recipes</h2>
      </Row>

      <Row>
        <h3>{user ? "${user.username} recipe" : "Enjoy your meal"} </h3>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image_food} alt="My Delicious Food" />
            <p>{recipe.description}</p>
          </div>
        ))}
      </Row>
      <Row>
        <Ingredient />
      </Row>
    </Container>
  );
}

export default Recipe;
