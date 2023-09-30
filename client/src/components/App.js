import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import MyFav from "./MyFav/MyFav";
import AddNew from "./AddNew/AddNew";
import NavBar from "./NavBar/NavBar";
import Recipe from "./Recipe/Recipe";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  console.log("render");

  const handleSearch = recipes.filter((e) => {
    const inputSearch = e.title.toLowerCase().includes(search);
    // setSearch(inputSearch);
  });

  const newUser = (user) => setUser(user);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <h1>test</h1>
      <NavBar search={handleSearch} setSearch={setSearch} />
      {/* direct to login page 
      background image */}
      <Switch>
        <Route exact path="/">
          <Home recipes={recipes} setRecipes={setRecipes} />
        </Route>
        <Route exact path="/recipe">
          <Recipe users={user} newUser={newUser} />
        </Route>
        <Route exact path="/mylist">
          <MyFav users={user} newUser={newUser} />
        </Route>
        <Route exact path="/addNew">
          <AddNew users={user} newUser={newUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
