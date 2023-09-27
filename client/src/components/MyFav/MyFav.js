import React from "react";
import "./MyFav.css";
import { useState, useEffect } from "react";
// import { useFormik } from 'formik';
// import { Container } from "react-bootstrap";

function MyFav() {
  const [account, setAccount] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("/recipe_member")
      .then((response) => response.json())
      .then((lists) => {
        setLists(lists);
      });
  }, []);

  return <h2>My Favorite</h2>;
}

export default MyFav;
