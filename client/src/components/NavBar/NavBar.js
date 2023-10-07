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
    <Container className="containerCenter">
      <Row>
        <div className="buttonAccount">
          <div>
          <Link
         
            to="/login"
            type="submit"
            variant="outline-primary"
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
            }}
          >
            <Button
              type="submit"
              variant="outline-primary"
              className="spaceTop lgoutButton"
            >
              Log In
            </Button>
          </Link>
          </div>
          <div>
            <Link
              to="/signUp"
              type="submit"
              
              variant="outline-primary"
              style={{
                textDecoration: "none",
                textAlign: "center",
                flexGrow: "1",
              }}
            >
              <Button
                type="submit"
                variant="outline-primary"
                className="spaceTop lgoutButton"
              >
                SignUp
              </Button>
            </Link>
          </div>
          <div>
            {" "}
            <Button
              type="submit"
              className="spaceTop lgoutButton  "
              variant="outline-primary"
              onClick={handleLogOut}
              style={{
                textDecoration: "none",
                textAlign: "center",
                flexGrow: "1",
              }}
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="searchMobile">
        <Col>
          <Form className="searchNav">
            <Form.Control
              placeholder="Search"
              type="search"
              to="#"
              onChange={(searchevent) => setSearch(searchevent.target.value)}
              style={{
                borderBlockStyle: "none",
                textAlign: "center",
                flexGrow: "1",
              }}
            />
          </Form>
        </Col>
        </div>
        <div className="mainMenuNav">
          <Col>
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
              className="button "
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
          </Col>
        </div>
      </Row>
    </Container>
  );
}



export default NavBar;
