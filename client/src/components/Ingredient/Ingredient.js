import React from "react";
import "./Ingredient.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

function Ingredient() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("/ingredient_all")
      .then((response) => response.json())
      .then((ingredients) => {
        setIngredients(ingredients);
      });
  }, []);
  return (
    <Container>
      <Row>
        <h2>Share Your Recipes</h2>
      </Row>
    </Container>
  );
}

export default Ingredient;
