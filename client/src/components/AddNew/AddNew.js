import React from "react";
import "./AddNew.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button, Col, Row } from "react-bootstrap";

function AddNew({ user, recipe, setRecipes }) {
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
    const recipeId = recipe.id;

    fetch(`http://127.0.0.1:5555/recipe_member/${recipeId})`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeForm),
    })
      .then((res) => res.json())
      .then((returnedRecipe) => {
        setRecipes([...recipe, returnedRecipe]);
        history.push("/recipe");
      });
  };
  return (
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h3 className="addFormTitle"> Add My Recipe</h3>
      <div className="formLeft">
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formtitle">Title</Form.Label>
              <div>
                <Form.Control
                  id="title"
                  className="inputRecipe"
                  type="text"
                  name="title"
                  placeholder="Enter title of the recipe"
                  onChange={handleInput}
                  value={recipeForm.title}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formImage">Image</Form.Label>
              <div>
                <Form.Control
                  id="image"
                  className="inputRecipe"
                  name="image"
                  type="text"
                  size="md"
                  placeholder="copy image's url"
                  onChange={handleInput}
                  value={recipeForm.image}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formDescription">Description</Form.Label>
              <div>
                <Form.Control
                  id="description"
                  name="description"
                  as="textarea"
                  className="inputSpace"
                  placeholder="Write down the description"
                  onChange={handleInput}
                  value={recipeForm.description}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formDescription">duration</Form.Label>
              <div>
                <Form.Control
                  id="duration"
                  name="duration"
                  as="textarea"
                  className="inputSpace"
                  placeholder="Write down the duration"
                  onChange={handleInput}
                  value={recipeForm.duration}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formDescription">serving</Form.Label>
              <div>
                <Form.Control
                  id="serving"
                  name="serving"
                  as="textarea"
                  className="inputSpace"
                  placeholder="Write down the serving"
                  onChange={handleInput}
                  value={recipeForm.serving}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formDescription">mealType</Form.Label>
              <div>
                <Form.Control
                  id="mealType"
                  name="mealType"
                  as="textarea"
                  className="inputSpace"
                  placeholder="Write down the mealType"
                  onChange={handleInput}
                  value={recipeForm.mealType}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formName">Ingredient</Form.Label>
              <div>
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
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formDirection">Direction</Form.Label>
              <div>
                <Form.Control
                  id="direction"
                  className="inputSpace"
                  name="direction"
                  as="textarea"
                  size="md"
                  placeholder="Enter the direction"
                  onChange={handleInput}
                  value={recipeForm.direction}
                />
              </div>
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
