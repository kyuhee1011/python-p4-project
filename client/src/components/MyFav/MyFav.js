import React from "react";
import "./MyFav.css";
import { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";

function MyFav({ user, recipes, onAddFavorite, onDeleteFavorite }) {
  const [myfavorite, setMyFavorite] = useState(false);

  const handleUpdateFavClick = (recipeId) => {
    setMyFavorite((myfavorite) => !myfavorite);
    fetch(`/favorites/${user.id}/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ myfavorite: !myfavorite }),
    })
      .then((res) => res.json())
      .then((newMyRecipe) => {
        onAddFavorite(newMyRecipe);
      });
  };

  const handleDeleteUpdate = (recipeId) => {
    setMyFavorite((myfavorite) => !myfavorite);
    fetch(`/favorites/${user.id}/${recipeId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((deletedMyRecipe) => {
        onDeleteFavorite(deletedMyRecipe);
      });
  };

  return (
    <div>
      <h1>{user ? user.username : "Favorites"}</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={() => handleUpdateFavClick(recipe.id)}
          onDeleteFavorite={() => handleDeleteUpdate(recipe.id)}
        />
      ))}

      {/* {list.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={handleUpdateFavClick}
          onDeleteFavorite={() => handleRemoveFav(recipe.id)}
        />
      ))} */}
    </div>
  );
}

export default MyFav;
