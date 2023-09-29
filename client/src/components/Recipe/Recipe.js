import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Row } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({ user }) {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://127.0.0.1:5555/${params.id}")
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes);
      });
  }, [params.id]);

  return (
    <Container>
      <Row>
        <h2>Share Your Recipes</h2>
      </Row>

      <Row>
        <h3>{user ? "${user.username} recipe" : "Enjoy your meal"} </h3>
      </Row>
      <Row>
        {recipes.map((recipes) =>
          (<h4>{recipes.title}</h4>)(
            <img key={recipes.id} src={recipes.image} alt="My Delicious Food" />
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
