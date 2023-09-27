import React from "react";
import "./Recipe.css";
import { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Container, Row } from "react-bootstrap";

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe_all")
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
        {recipes.map((recipe) => (
          <img
            className="imgControl"
            key={recipe.id}
            src={recipe.image}
            name={recipe.name}
            alt="Delicious Meal"
          />
        ))}
      </Row>
    </Container>
  );
}

export default Recipe;
