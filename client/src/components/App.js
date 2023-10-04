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
  console.log("render");

  const handleSearch = recipes.filter((e) => {
    return e.title.toLowerCase().includes(search.toLowerCase());
    // setSearch(inputSearch);
  });
  const [username, setUsername] = useState("");
  // function handleUpdate(e) {
  //   setUsername(e.target.value);
  // }

  const handleAccount = (user) => setUser(user);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/check_session`).then((response) => {
      console.log("response", response);
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar search={handleSearch} setSearch={setSearch} />
      {/* direct to login page 
      background image */}
      <Switch>
        <Route exact path="/login">
          <Login user={user} handleAccount={handleAccount} />
        </Route>
        <Route exact path="/signUp">
          <SignUp user={user} handleAccount={handleAccount} />
        </Route>
        <Route exact path="/">
          <Home recipes={recipes} setRecipes={setRecipes} />
        </Route>
        <Route exact path="/recipe">
          <Recipe users={user} />
        </Route>
        <Route exact path="/mylist">
          <MyFav users={user} />
        </Route>
        <Route exact path="/addNew">
          <AddNew users={user} setRecipes={setRecipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
