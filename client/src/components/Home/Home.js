import React from "react";
import "./Home.css";
// import { useState } from 'react';
// import { useFormik } from 'formik';
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div>
        <h2>Share Your Recipes</h2>
      </div>
      <div>
        {recipes.map((recipe) => (
          <img
            className="imgControl"
            key={recipe.id}
            src={recipe.image}
            name={recipe.name}
            alt="Delicious Meal"
          />
        ))}
      </div>
      <div>
        <Link to="/login">
          <Button variant="info" size="md" style={{ margin: "1rem" }}>
            Login
          </Button>
        </Link>

        <Link to="/signUp">
          <Button variant="info" size="md" style={{ margin: "1rem" }}>
            signUp
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
