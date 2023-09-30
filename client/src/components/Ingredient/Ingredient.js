import React from "react";
import "./Ingredient.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

function Ingredient() {
  const [ingredients, setIngredients] = useState([]);

  useEffect((ingredients) => {
    fetch("http://127.0.0.1:5555/ingredient_all")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  const testIngredient = ingredients.map((ingredient) => ingredient);
  console.log(testIngredient);
  return (
    <Container>
      <Row>
        <h2>Share Your Ingredient for Your Recipe</h2>
      </Row>
      <Row>
        <div>
          {/* {ingredients.map((ingredient) => (
            <div key={ingredient.id}>
              <p>{ingredient.name}</p>
              <p>{ingredient.direction}</p>
            </div>
          ))} */}
        </div>
      </Row>
    </Container>
  );
}

export default Ingredient;
