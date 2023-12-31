import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import * as yup from "yup";

function SignUp({ user, handleAccount }) {
  const [errorPage, setErrorPage] = useState("");
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").max(20),
    password: yup.string().required("Must enter a password").max(20),
    confirmation: yup
      .string()
      .required("Please enter confirm your password")
      .oneOf([yup.ref("password"), null], "Password must match!"),
    firstName: yup.string().required("Must enter a first name").max(20),
    lastName: yup.string().required("Must enter a last name").max(20),
  });
  const formik = useFormik({
    initialValues: {
      confirmation: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      fetch(`signup`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        console.log(res);

        if (res.ok) {
          setErrorPage("Successfully signed up");
          res.json().then((user) => {
            handleAccount(user);
          });
          history.push(`/login`);
        } else if (res.status === 400) {
          setErrorPage("Username already exists");
        }
      });
    },
  });
  if (user) {
    return <h1>Welcome!</h1>;
  }

  return (
    <Form className="signUpForm" onSubmit={formik.handleSubmit}>
      <h2 className="addAccount"> Sign Up Page {errorPage}</h2>
      <div>
        <InputGroup>
          <Row>
            <Col lg="10">
              <Form.Label htmlFor="firstName" className="formName">
                First Name
              </Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                style={{ width:"20rem" }}
                name="firstName"
                placeholder="Enter your first name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <p style={{ color: "red" }}> {formik.errors.firstName}</p>
            </Col>

            <Col lg="10">
              <Form.Label htmlFor="lastName" className="formName">
                Last Name
              </Form.Label>
              <Form.Control
                id="lastName"
                type="text"
                style={{ width:"20rem" }}
                name="lastName"
                placeholder="Enter your last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <p style={{ color: "red" }}> {formik.errors.lastName}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="10">
              <Form.Label htmlFor="username" className="formName">
                Username
              </Form.Label>
              <Form.Control
                id="username"
                type="text"
                style={{ width:"20rem" }}
                name="username"
                placeholder="Enter your username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <p style={{ color: "red" }}> {formik.errors.username}</p>
            </Col>
            <Col lg="10">
              <Form.Label htmlFor="password" className="formName">
                Password
              </Form.Label>

              <Form.Control
                id="password"
                type="password"
                style={{ width:"20rem" }}
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <p style={{ color: "red" }}> {formik.errors.password}</p>
            </Col>
            <Col lg="10">
              <Form.Label htmlFor="confirmation" className="formName">
                Password Confirmation
              </Form.Label>

              <Form.Control
                id="confirmation"
                type="password"
                style={{ width:"20rem" }}
                name="confirmation"
                placeholder="Enter your password again"
                onChange={formik.handleChange}
                value={formik.values.confirmation}
              />
              <p style={{ color: "red" }}> {formik.errors.confirmation}</p>
            </Col>
          </Row>
        </InputGroup>
      </div>
      <Button
        className="formSubmt"
        onClick={() => console.log("click")}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
