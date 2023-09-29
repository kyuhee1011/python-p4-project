import React from "react";

import { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Container, Row } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/recipe_all")
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes);
      });
  }, []);
  return (
    <Container>
      <Row>
        <h2>Share Your Recipes</h2>
      </Row>
      <Row>
        {recipes.map(
          (recipes) => (
            (<h3>{recipes.title}</h3>),
            (
              <img
                key={recipes.id}
                src={recipes.image}
                alt="My Delicious Food"
              />
            )
          )
        )}
      </Row>
      <Row>
        <Ingredient />
      </Row>
    </Container>
  );
}

export default Recipe;
