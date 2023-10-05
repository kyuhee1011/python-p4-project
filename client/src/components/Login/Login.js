import React from "react";
import "./Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

function LogIn({ user, handleAccount }) {
  const [errorPage, setErrorPage] = useState("");
  const history = useHistory();

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
      console.log(values);
      fetch(`/login`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          setErrorPage("Successfully Logged in");
          res.json().then((user) => {
            handleAccount(user);
          });
          history.push("/recipe");
        } else if (res.status === 422) {
          setErrorPage("Invalid username or password ");
        }
      });
    },
  });

  if (user) {
    return <h1>Logged in.</h1>;
  }

  return (
    <Form className="formContainer" onSubmit={formik.handleSubmit}>
      <h2 className="addAccount"> Login {errorPage}</h2>
      <div className="formLogin">
        <InputGroup className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label htmlFor="username" className="formName">
                Username:
              </Form.Label>
              <Form.Control
                id="username"
                type="text"
                className="formText"
                name="username"
                placeholder="Enter your username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <p style={{ color: "red" }}> {formik.errors.username}</p>
            </Col>
            <Col lg="10">
              <Form.Label htmlFor="password" className="formPassword">
                Password
              </Form.Label>

              <Form.Control
                id="password"
                type="text"
                className="formText"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <p style={{ color: "red" }}> {formik.errors.lastName}</p>
            </Col>
          </Row>
        </InputGroup>
      </div>
      <Button className="formSubmt" variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/signup">
        <Button className="formSubmt" variant="primary" type="submit">
          SignUp
        </Button>
      </Link>
    </Form>
  );
}

export default LogIn;
