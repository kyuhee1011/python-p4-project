import React from "react";
import "./Login.css";
import { useState, useHistory } from "react";
import { useFormik } from "formik";
// import { Container } from "react-bootstrap";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

function LogIn({ handleSubmit, handleUpdate, newUser, user }) {
  const [errorPage, setErrorPage] = useState("");

  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").max(20),
    password: yup.string().required("Must enter a password").max(20),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status === 200) {
          setErrorPage("Successfully signed up");
        } else if (res.status === 422) {
          setErrorPage("Invalid username or password ");
        }
      });
    },
  });

  return (
    <Form className="formContainer" onSubmit={formik.handleSubmit}>
      <h2 className="addAccount"> Login </h2>
      <div className="formLogin">
        <InputGroup className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label htmlFor="username" className="formUserName">
                {" "}
                username:
              </Form.Label>
              <Form.Control
                id="username"
                type="text"
                name="username "
                placeholder="Enter your username"
                onChange={formik.handleUpdate}
                value={formik.values.username}
              />
              <p style={{ color: "red" }}> {formik.errors.username}</p>
            </Col>
            <Col lg="10">
              <Form.Label htmlFor="password" className="formPassword">
                {" "}
                Password{" "}
              </Form.Label>

              <Form.Control
                id="password"
                type="text"
                name="password "
                placeholder="Enter your password"
                onChange={formik.handleUpdate}
                value={formik.values.password}
              />
              <p style={{ color: "red" }}> {formik.errors.lastName}</p>
            </Col>
          </Row>
        </InputGroup>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/signup">
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Link>
    </Form>
  );
}

export default LogIn;
