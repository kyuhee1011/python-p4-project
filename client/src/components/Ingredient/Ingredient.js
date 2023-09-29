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
        <h2>Share Your Ingredient for Your Recipe</h2>
      </Row>
      <Row>
        {ingredients.map((ingredients) =>
          (<p>{ingredients.name}</p>)(<p>{ingredients.direction}</p>)
        )}
      </Row>
    </Container>
  );
}

export default Ingredient;
