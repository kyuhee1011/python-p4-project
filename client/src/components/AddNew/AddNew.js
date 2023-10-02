import React from "react";
import "./AddNew.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button, Col, Row } from "react-bootstrap";

function AddNew({ user, recipes, setRecipes }) {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    image: "",
    description: "",
    name: "",
    direction: "",
    Favorite: "",
  });

  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRecipeForm({ ...recipeForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5555/recipe_all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeForm),
    })
      .then((res) => res.json())
      .then((returnedRecipe) => {
        setRecipes([...recipes, returnedRecipe]);
        history.push("/recipe");
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h3> Add My Recipe</h3>
      <div>
        <Form.Group className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label>title</Form.Label>

              <Form.Control
                id="title"
                className="inputSpace"
                type="text"
                name="title"
                placeholder="Enter title of the recipe"
                onChange={handleInput}
                value={recipeForm.title}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formName">Image</Form.Label>

              <Form.Control
                id="image"
                className="inputSpace"
                name="image"
                type="text"
                size="md"
                placeholder="copy image's url"
                onChange={handleInput}
                value={recipeForm.image}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label className="descriptionName">Description</Form.Label>

              <Form.Control
                id="description"
                name="description"
                as="textarea"
                className="inputSpace"
                placeholder="Write down the description"
                onChange={handleInput}
                value={recipeForm.description}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formName">Name</Form.Label>

              <Form.Control
                id="name"
                className="inputSpace"
                name="name"
                as="textarea"
                size="md"
                placeholder="enter the ingredient name"
                onChange={handleInput}
                value={recipeForm.name}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formName">Direction</Form.Label>

              <Form.Control
                id="direction"
                className="inputSpace"
                name="direction"
                type="text"
                size="md"
                placeholder="Enter the direction"
                onChange={handleInput}
                value={recipeForm.direction}
              />
            </Col>
          </Row>
        </Form.Group>
      </div>
      <Button className="formSubmt" variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddNew;
