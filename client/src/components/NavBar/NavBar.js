import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function NavBar({ setSearch, handleLogOut }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

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
        <Form className="seacrh">
          <Form.Control
            placeholder="Search"
            type="search"
            to="#"
            onChange={(searchevent) => setSearch(searchevent.target.value)} //setSearch(search)}
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
              padding: ".5%",
            }}
          />
        </Form>

        <Col>
          <Link
            // className="loginButton"
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
        </Col>
      </Row>

      <Row className="menuSpace">
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
