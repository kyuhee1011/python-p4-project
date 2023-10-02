import React from "react";
import "./Recipe.css";
import { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Row, Button } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({ user, onAddList, onDeleteFavorite }) {
  const history = useHistory();
  const params = useParams();
  const [ingredient, setIngredient] = useState(null);
  const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [favorite, setFavorite] = useState([]);
  // const [list, setlist] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/recipe_all")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);

        // setIngredient(data);
      });
  }, []);
  const test = recipes.map((recipe) => recipe);
  console.log(test);

  function handleDelete() {
    fetch(`http://127.0.0.1:5555/recipe_member/${ingredient.id}}`, {
      method: "DELETE",
    }).then(() => history.push(`http://127.0.0.1:5555/recipe_all"`));
  }

  // const handleRecipeIngredient = (recipeId) => {
  //   fetch(`http://127.0.0.1:5555/recipe_member/recipeDetail/${recipeId}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIngredient(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching ingredients:", error);
  //       setLoading(false);
  //     });
  // };

  const handleFavorite = (recipeId) => {
    // Find the recipe that corresponds to the clicked "Favorites" button
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        // Toggle the favorite status for the specific recipe
        return { ...recipe, favorite: !recipe.favorite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);

    fetch(`http://127.0.0.1:5555/recipe_member/${user.id}/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle success or error responses from the server
        if (data.success) {
          onAddList(data.favorite);
        } else {
          onDeleteFavorite(data.favorite);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container>
      <Row>
        <h2 className="recipeTitle">Share Your Recipes</h2>
      </Row>

      <Row>
        <h3 className="recipeTitle">
          {user ? "${user.username} recipe" : "Enjoy your meal"}{" "}
        </h3>
      </Row>
      <Row>
        {/* {recipe && (
    <div>
        <h1>{recipe.title}</h1>
        <ul>
            {recipe.ingredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
            ))}
        </ul>
    </div>
)} */}
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3 className="recipeMainTitle">{recipe.title}</h3>
            <p className="rateColor">{recipe.review}</p>
            <img src={recipe.image_food} alt="My Delicious Food" />
            <p className="recipeDescript">{recipe.description}</p>

            <Ingredient />
            {/* <p>
              {" "}
              {recipe.ingredients.length > 0 ? (
                <div>
                  <p>
                    {recipe.ingredients[0].name} -{" "}
                    {recipe.ingredients[0].direction}
                  </p>
                </div>
              ) : (
                "No ingredients available"
              )}
            </p> */}

            {/* {recipe && (
    <div>
        <h1>{recipe.title}</h1>
        <ul>
            {recipe.ingredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.name}</li>
            ))}
        </ul>
    </div>
)} */}

            <Button
              type="submit"
              variant={recipe.favorite ? "primary" : "outline-primary"}
              onClick={() => handleFavorite(recipe.id)}
            >
              Favorites
            </Button>
            <Button
              type="submit"
              variant="outline-primary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Recipe;
