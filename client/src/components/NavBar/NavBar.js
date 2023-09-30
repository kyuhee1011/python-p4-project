import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
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
        <Col>
          <Link className="navBar-link" to="/login">
            <Button
              type="submit"
              variant="outline-primary"
              onChange={handleUpdate}
            >
              Log In
              <i class="fi fi-sr-user"></i>
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            type="submit"
            variant="outline-primary"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Col>
        <Col>
          <Link
            className="navBar-link"
            placeholder="Search"
            type="search"
            onChange={(searchSubmit) => setSearch(searchSubmit)}
          >
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <ul>
          <li className="nav-title">
            <Link className="navBar-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-title">
            <Link className="navBar-link" to="/recipe">
              MyRecipe
            </Link>
          </li>
          <li className="nav-title">
            <Link className="navBar-link" to="/mylist">
              My Favorite
            </Link>
          </li>
          <li className="nav-title">
            <Link className="navBar-link" to="/addNew">
              Add NewRecipe
            </Link>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default NavBar;
