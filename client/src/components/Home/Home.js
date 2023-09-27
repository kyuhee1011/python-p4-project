import "./Home.css";
import { Link } from "react-router-dom";
// import { useFormik } from 'formik';
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <div>
        <Link to="/login">
          <Button variant="info" size="md" style={{ margin: "1rem" }}>
            Login
          </Button>
        </Link>

        <Link to="/signUp">
          <Button variant="info" size="md" style={{ margin: "1rem" }}>
            signUp
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
