import React from "react";
import "./Ingredient.css";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function Ingredient({ user, recipe }) {
  return (
    <Container>
      <Row>
        <h3 className="mainIngri">Ingredients</h3>
      </Row>
      <Row className="ingriName">{recipe.ingredients[0].name}</Row>
      <Row className="ingriDirect"><b>Directions:</b> <br/>{recipe.ingredients[0].direction}</Row>

      <Row>
        <Link to="/addNew"
          style={{
            textDecoration: "none",
          }}>
          <p className="shareRecipe">Share Your Recipe</p>
        </Link>
      </Row>
    </Container>
  );
}

export default Ingredient;
