import React from "react";
import "./MyFav.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

// import { useFormik } from 'formik';
// import { Container } from "react-bootstrap";

function MyFav({ user }) {
  const [account, setAccount] = useState(null);
  const [list, setList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/users/${params.username}`)
      .then((response) => response.json())
      .then((account) => {
        setAccount(account);
      });
  }, [params.username]);

  function handleAddFavorite(recipe) {
    setList([...list, recipe]);
  }

  function handleRemoveFav(id) {
    const removeFavorite = list.filter((recipe) => recipe.id !== id);
    setList(removeFavorite);
  }

  return (
    <div>
      <h1>{account ? account.username : ""}</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={handleAddFavorite}
          onDeleteFavorite={handleRemoveFav}
        />
      ))}
      <h1>Favorites</h1>
      {list.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          onAddFavorite={handleAddFavorite}
          onDeleteFavorite={() => handleRemoveFav(recipe.id)}
        />
      ))}
    </div>
  );
}

export default MyFav;
