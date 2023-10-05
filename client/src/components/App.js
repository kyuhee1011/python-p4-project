import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import MyFav from "./MyFav/MyFav";
import AddNew from "./AddNew/AddNew";
import NavBar from "./NavBar/NavBar";
import Recipe from "./Recipe/Recipe";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  console.log(recipes);

  const filteredRecipe = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(search);
  });
  console.log(filteredRecipe);
  const [username, setUsername] = useState("");

  const handleAccount = (user) => setUser(user);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/check_session`).then((response) => {
      console.log("response", response);
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOut() {
    fetch(`http://127.0.0.1:5555/logout`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <NavBar
        setSearch={setSearch}
        search={search}
        handleLogOut={handleLogOut}
      />

      <Switch>
        <Route exact path="/login">
          <Login user={user} handleAccount={handleAccount} />
        </Route>
        <Route exact path="/signUp">
          <SignUp user={user} handleAccount={handleAccount} />
        </Route>
        <Route exact path="/">
          <Home recipes={filteredRecipe} setRecipes={setRecipes} />
        </Route>
        <Route exact path="/recipe">
          <Recipe users={user} recipes={recipes} setRecipes={setRecipes} />
        </Route>
        <Route exact path="/mylist">
          <MyFav users={user} />
        </Route>
        <Route exact path="/addNew">
          <AddNew users={user} recipes={recipes} setRecipes={setRecipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
