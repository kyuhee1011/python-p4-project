import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Home from "./Home/Home";
import MyFav from "./MyFav/MyFav";
import AddNew from "./AddNew/AddNew";
import NavBar from "./NavBar/NavBar";
import Recipe from "./Recipe/Recipe";

function App() {
  const [user, setUser] = useState(null);
  const [searchSubmit, setSearchSubmit] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <NavBar />
      {/* direct to login page 
      background image */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Recipe">
          <Recipe />
        </Route>
        <Route exact path="/MyFav">
          <MyFav />
        </Route>
        <Route exact path="/AddNew">
          <AddNew />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
