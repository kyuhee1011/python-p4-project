import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavBar>
      <Container fluid className="navBarContainer">
        <Row>
          <Col xs={6} md={4}>
            <i class="fi fi-sr-user"></i>
            <span>Log In</span>
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
