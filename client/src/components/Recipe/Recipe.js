import React from "react";
import "./Recipe.css";
import { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Container, Row } from "react-bootstrap";
import Ingredient from "./Ingredient/Ingredient";

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipe_all")
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
        <Ingredient />
      </Row>
    </Container>
  );
}

export default Recipe;
