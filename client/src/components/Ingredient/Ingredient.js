import React from "react";
import "./Ingredient.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";

function Ingredient({ user, recipe }) {
  const [ingredients, setIngredient] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:5555/ingredient_all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIngredient(data);
      });
  }, []);
  return (
    <Container>
      <Row>
        <h3 className="mainIngri">Ingredients</h3>
      </Row>
      <Row className="ingriName">{recipe.ingredients[0].name}</Row>
      <Row className="ingriDirect">{recipe.ingredients[0].direction}</Row>
      {/* add new ingredient */}
      {/* <Row>
        <Link className="navBar-link" to="/addNew">
          <p>Add another ingredient</p>
        </Link>
      </Row> */}
      <Row>
        <Link className="navBar-link" to="/addNew">
          <p>Share Your Recipe</p>
        </Link>
      </Row>
    </Container>
  );
}

export default Ingredient;
