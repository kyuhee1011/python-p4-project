import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Row, Button } from "react-bootstrap";
import Ingredient from "../Ingredient/Ingredient";

function Recipe({ user, handleAddFavorite, handleRemoveFav }) {
  const [recipes, setRecipes] = useState([]);
  // const [favorite, setFavorite] = useState(favorite);
  // const [list, setlist] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/recipe_all")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);
  const test = recipes.map((recipe) => recipe);
  console.log(test);

  // function handleFavorite() {
  //   setFavorite((favorite) => !favorite);
  //   fetch(`http://127.0.0.1:5555/favorites/${user.id}/${recipe.id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ favorite: !favorite }),
  //   })
  //     .then((res) => res.json())
  //     .then((newRecipeList) => {
  //       onMyFavList(newRecipeList);
  //     });

  //   function handleAddFavorite(recipe) {
  //     setlist([...list, recipe]);
  //   }
  // }

  // function handleRemoveFav() {
  //   const removeFavorite = list.filter((recipe) => recipe.id !== id);
  //   setlist(removeFavorite);
  // }

  // const [myfavorite, setMyFavorite] = useState(favorite);
  // const handleUpdateClick = () => {
  //   setMyFavorite((myfavorite) => !myfavorite);
  //   fetch(`http://localhost:3000/desserts/${id}`, {
  //     //Updates new dessert from AddForm page and the PATCH - update new dessert list
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ favorite: !favorite }),
  //   })
  //     .then((res) => res.json())
  //     .then((newDessertData) => {
  //       onMyFavList(newDessertData);
  //     });
  // };

  return (
    <Container>
      <Row>
        <h2>Share Your Recipes</h2>
      </Row>

      <Row>
        <h3>{user ? "${user.username} recipe" : "Enjoy your meal"} </h3>
      </Row>
      <Row>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image_food} alt="My Delicious Food" />
            <p>{recipe.description}</p>
            <Button
            // type="submit"
            // variant="outline-primary"
            // onAddList={handleAddFavorite}
            // onDeleteFavorite={handleRemoveFav}
            >
              Favorites
            </Button>
          </div>
        ))}
      </Row>
      {/* <Row>
        <Ingredient />
      </Row> */}
      <Row></Row>
    </Container>
  );
}

export default Recipe;
