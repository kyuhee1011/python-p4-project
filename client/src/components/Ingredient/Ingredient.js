import React from "react";
import "./Ingredient.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

function Ingredient({ user }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/ingredient_all")
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);
  const testIngredient = ingredients.map((ingredient) => ingredient);
  console.log(testIngredient);
  // const testIngredient = ingredients.slice();
  // console.log(testIngredient);
  return (
    <Container>
      <Row>
        <h2>Share Your Ingredient for Your Recipe</h2>
      </Row>
      <Row>
        {/* <div>
          {ingredients.map((ingredient) => (
            <div key={ingredient.id}>
              <p>{ingredient.name}</p>
              <p>{ingredient.direction}</p>
            </div>
          ))}
        </div> */}
      </Row>
    </Container>
  );
}

export default Ingredient;
