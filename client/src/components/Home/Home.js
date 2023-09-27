import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Container, Button } from "react-bootstrap";
import Recipe from "../Recipe/Recipe";
function Home() {
  const [main, setMain] = useState([]);

  useEffect(() => {
    fetch("/recipe_all")
      .then((response) => response.json())
      .then((main) => {
        setMain(main);
      });
  }, []);

  return (
    <Container>
      <div>
        <h2>home page</h2>
      </div>
    </Container>
  );
}

export default Home;
