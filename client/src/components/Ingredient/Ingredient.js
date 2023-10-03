import React from "react";
import "./Ingredient.css";
import { Link } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

function Ingredient({ user, recipe }) {
  console.log(recipe);

  return (
    <Container>
      <Row>
        <h3 className="mainIngri">Ingredients</h3>
      </Row>
      <Row className="ingriName">{recipe.ingredients[0].name}</Row>
      <Row className="ingriDirect">{recipe.ingredients[0].direction}</Row>
      <Row>
        <Link className="navBar-link" to="/addNew">
          <p>Share Your Recipe</p>
        </Link>
      </Row>
    </Container>
  );
}

export default Ingredient;
