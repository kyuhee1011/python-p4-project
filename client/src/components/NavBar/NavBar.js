import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function NavBar({ user, setSearch, handleLogOut }) {
  const handleNavClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert("Please Logged In");
    }
  };
  return (
    <Container>
      <Row className="spaceTop">
        <Link
          className="loginButton"
          to="/login"
          type="submit"
          variant="outline-primary"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          Log In
        </Link>
        <Link
          to="/signUp"
          type="submit"
          variant="outline-primary"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
            padding: ".5%",
          }}
        >
          <Button type="submit" variant="outline-primary" className="button">
            SignUp
          </Button>
        </Link>
        <Button
          type="submit"
          className="lgoutButton"
          variant="outline-primary"
          onClick={handleLogOut}
        >
          Logout
        </Button>
        <Col>
          <Form className="seacrhNav">
            <Form.Control
              placeholder="Search"
              type="search"
              to="#"
              onChange={(searchevent) => setSearch(searchevent.target.value)}
              style={{
                textDecoration: "none",
                textAlign: "center",
                flexGrow: "1",
                padding: ".5%",
                margin: "1%",
              }}
            />
          </Form>
        </Col>
      </Row>

      <Row className="navSpace">
        <Link
          className="button"
          to="/"
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          Home
        </Link>

        <Link
          className="button"
          to="/recipe"
          onClick={handleNavClick}
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          MyRecipe
        </Link>

        <Link
          className="button"
          to="/mylist"
          onClick={handleNavClick}
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          My Favorite
        </Link>

        <Link
          className="button"
          to="/addNew"
          onClick={handleNavClick}
          style={{
            textDecoration: "none",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          Add NewRecipe
        </Link>
      </Row>
    </Container>
  );
}

export default NavBar;
