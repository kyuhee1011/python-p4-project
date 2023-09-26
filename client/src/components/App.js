// import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Home from "./components/Home/Home";
// import MyFav from "./components/MyFav/MyFav";
// import AddForm from "./components/AddNew/AddNew";
import NavBar from "./components/NavBar/NavBar";
// import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Switch>
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
      </Switch> */}
    </div>
  );
}

export default App;
