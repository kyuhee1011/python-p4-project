import React from "react";
import "./Ingredient.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function Ingredient({ user }) {
  // const history = useHistory();
  // const params = useParams();
  const [ingredients, setIngredients] = useState([]);
  const [dirction, setDirection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/ingredient_all`)
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);
  const testIngredient = ingredients.map((ingredient) => ingredient);
  console.log(testIngredient);
  // const testIngredient = ingredients.slice();
  // console.log(testIngredient);

  const handleRecipeIngredient = (recipeId) => {
    fetch(`http://127.0.0.1:5555/recipe_member/recipeDetail/${recipeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDirection(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Row>
        <h3>Ingredients</h3>
      </Row>
      <Row>
        <div>
          {ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name} - {ingredient.direction}
              </li>
            ))
          ) : (
            <p>No ingredients available for this recipe.</p>
          )}
        </div>
        {/* <div key={ingredient.id}> */}
        {/* <p>
                {" "}
                {ingredient.ingredients.length > 0 ? (
                  <div>
                    <p>
                      {ingredient.ingredients[0].name} -{" "}
                      {ingredient.ingredients[0].direction}
                    </p>
                  </div>
                ) : (
                  "No ingredients available"
                )}
              </p>
            </div>
          ))}
        </div> */}
      </Row>
      <Row>
        <Link className="navBar-link" to="/addNew">
          <p>Share Your Recipe</p>
        </Link>
      </Row>
    </Container>
  );
}

export default Ingredient;
