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
            <li className="nav-title">Home</li>
            <li className="nav-title">MyRecipe</li>
            <li className="nav-title">My Favorite</li>
            <li className="nav-title">Add NewRecipe</li>
          </ul>
        </Row>
      </Container>
    </NavBar>
  );
}

export default NavBar;
