import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function NavBar({ search, setSearch }) {
  return (
    <Container fluid className="navBarContainer">
      <Row>
        <Col>
          <Link className="navBar-link" to="/login">
            <Button type="submit" variant="outline-primary">
              Log In
              <i class="fi fi-sr-user"></i>
            </Button>
          </Link>
        </Col>
        <Col>
          <Button type="submit" variant="outline-primary">
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
            <Link className="navBar-link" to="/recipes">
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
