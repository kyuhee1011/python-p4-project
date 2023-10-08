import React from "react";
import "./AddNew.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button, Col, Row, FloatingLabel } from "react-bootstrap";

function AddNew({ user, recipes, setRecipes }) {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    review: "",
    image_food: "",
    description: "",
    duration: "",
    serving: "",
    mealType: "",
    name: "",
    direction: "",
  });

  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRecipeForm({ ...recipeForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/recipe_all`, {
      credentials: "include",
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
    <Form className="formContainer" onSubmit={handleSubmit}>
      <h3 className="addFormTitle"> Add My Recipe</h3>
      <div>
        <Form.Group>
          <Row>
            <Col md="10">
              <Form.Label className="formtitle">Title</Form.Label>
              <div>
                <Form.Control
                  id="title"
                  className="inputRecipe"
                  type="text"
                  style={{ width: "10rem" }}
                  name="title"
                  placeholder="Enter title of the recipe"
                  onChange={handleInput}
                  value={recipeForm.title}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col md="10">
              <Form.Label className="formtitle">Review</Form.Label>
              <div>
                <Form.Control
                  id="review"
                  className="inputRecipe"
                  style={{ width: "10rem" }}
                  type="text"
                  name="review"
                  placeholder="Enter rate 1 to 5"
                  onChange={handleInput}
                  value={recipeForm.review}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col md="10">
              <Form.Label className="formImage">Image</Form.Label>
              <div>
                <Form.Control
                  id="image_food"
                  className="inputRecipe"
                  name="image_food"
                  style={{ width: "10rem" }}
                  type="text"
                  size="md"
                  placeholder="Copy image's url"
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
                  style={{ width: "10rem" }}
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
              <Form.Label className="formDescription">Duration</Form.Label>
              <div>
                <Form.Control
                  id="duration"
                  name="duration"
                  as="textarea"
                  style={{ width: "10rem" }}
                  className="inputSpace"
                  placeholder="Write down the duration"
                  onChange={handleInput}
                  value={recipeForm.duration}
                />
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col md="10">
              <Form.Label className="formDescription">Serving</Form.Label>
              <div>
                <Form.Control
                  id="serving"
                  name="serving"
                  style={{ width: "10rem" }}
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
              <Form.Label className="formType">MealType</Form.Label>
              <div>
                <Form.Control
                  id="mealType"
                  name="mealType"
                  style={{ width: "10rem" }}
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
                  style={{ width: "10rem" }}
                  as="textarea"
                  size="md"
                  placeholder="Enter the ingredient name"
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
                  style={{ width: "10rem" }}
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
