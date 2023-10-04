import React from "react";
import "./Recipe.css";
import { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Row, Button } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({
  user,
  setSearch,
  onAddList,
  onDeleteFavorite,
  setRecipes,
  recipes,
}) {
  const history = useHistory();
  const params = useParams();
  const [ingredient, setIngredient] = useState(null);
  // const [recipes, setRecipes] = useState([]);
  const [dirction, setDirection] = useState(null);

  const [favorite, setFavorite] = useState([]);
  // const [list, setlist] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/recipe_all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);

        // setIngredient(data);
      });
  }, []);
  const test = recipes.map((recipe) => recipe);
  console.log(test);

  function handleDelete() {
    fetch(`http://127.0.0.1:5555/recipe_all}`, {
      method: "DELETE",
    }).then(() => history.push(`http://127.0.0.1:5555/recipe_all"`));
  }

  // const handleFavorite = (favoriteRecipe) => {
  //   // Find the recipe that corresponds to the clicked "Favorites" button
  //   const updatedRecipes = recipes.map((recipe) => {
  //     if (recipes.id === recipe.id) {
  //       // Toggle the favorite status for the specific recipe
  //       return { ...recipe, favorite: !recipe.favorite };
  //     }
  //     return recipes;
  //   });
  //   setRecipes(updatedRecipes);

  //   fetch(`http://127.0.0.1:5555/favorites/${user.id}/${recipe.id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ favorite: !favorite }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Handle success or error responses from the server
  //       if (data.success) {
  //         onAddList(data.favorite);
  //       } else {
  //         onDeleteFavorite(data.favorite);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <Container>
      <Row>
        <h2 className="recipeTitle">Share Your Recipes</h2>
      </Row>

      <Row>
        <h3 className="recipeTitle">
          {user ? "${user.username}'s recipes" : "Enjoy your meal"}{" "}
        </h3>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3 className="recipeMainTitle">{recipe.title}</h3>
            <p className="rateColor">{recipe.review}</p>
            <img src={recipe.image_food} alt="My Delicious Food" />
            <p className="recipeDescript">{recipe.description}</p>
            <p>{recipe.duration}</p>
            <p>{recipe.serving}</p>
            <p>{recipe.mealType}</p>

            <Ingredient recipe={recipe} />

            <Button
              type="submit"
              variant={recipe.favorite ? "primary" : "outline-primary"}
              // onClick={() => handleFavorite(recipe.id)}
              className="formEdit"
            >
              Favorites
            </Button>
            <Button
              type="submit"
              variant="outline-primary"
              onClick={() => handleDelete(recipe.id)}
              className="formEdit"
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
