import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function NavBar({ search, setSearch }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  function handleLogOut() {
    fetch("http://127.0.0.1:5555/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  function handleUpdate(e) {
    setUsername(e.target.value);
  }
  return (
    <Container fluid className="navBarContainer">
      <Row>
        <Link
          className="button"
          to="/login"
          type="submit"
          variant="outline-primary"
          onChange={handleUpdate}
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            margin: ".2%",
          }}
        >
          {/* <Button
              type="submit"
              variant="outline-primary"
              onChange={handleUpdate}
            > */}
          Log In
          <i class="fi fi-sr-user"></i>
          {/* </Button> */}
        </Link>

        <Link
          className="button"
          to="/signUp"
          type="submit"
          variant="outline-primary"
          onChange={handleUpdate}
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            padding: ".5%",
            margin: ".2%",
          }}
        >
          {/* <Button
              type="submit"
              variant="outline-primary"
              onClick={handleUpdate}
            > */}
          SignUp
          {/* </Button> */}
        </Link>

        <Col>
          <Button
            type="submit"
            className="lgoutButton"
            variant="outline-primary"
            onClick={handleLogOut}
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
              padding: ".5%",
            }}
          >
            Logout
          </Button>

          <Link
            placeholder="Search"
            type="search"
            onChange={(searchSubmit) => setSearch(searchSubmit)}
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
              padding: ".5%",
            }}
          >
            {/* <Link
            className="navBar-link"
            placeholder="Search"
            type="search"
            onChange={(searchSubmit) => setSearch(searchSubmit)}
          > */}
            <Button className="button" type="submit" variant="outline-primary">
              Search
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="menuSpace">
        <Link
          className="button"
          exact
          to="/"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            margin: ".5%",
          }}
        >
          Home
        </Link>

        <Link
          className="button"
          to="/recipe"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            margin: "1%",
          }}
        >
          MyRecipe
        </Link>

        <Link
          className="button"
          to="/mylist"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            margin: "1%",
          }}
        >
          My Favorite
        </Link>

        <Link
          className="button"
          to="/addNew"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            margin: "1%",
          }}
        >
          Add NewRecipe
        </Link>
      </Row>
    </Container>
  );
}

export default NavBar;
