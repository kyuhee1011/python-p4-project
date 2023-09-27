import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <NavBar>
      <Container fluid className="navBarContainer">
        <Row>
          <Col xs={6} md={4}>
            <Link className="navBar-link" to="/login">
              Log In
              <i class="fi fi-sr-user"></i>
            </Link>
          </Col>
          <Col>
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
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
    </NavBar>
  );
}

export default NavBar;
