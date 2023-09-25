import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

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
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>My Favorite</li>
          </ul>
        </Row>
      </Container>
    </NavBar>
  );
}

export default NavBar;
