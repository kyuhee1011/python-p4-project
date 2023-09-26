import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useFormik } from "formik";
// import { Container } from "react-bootstrap";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import * as yup from "yup";

function SignUp() {
  const [errorPage, setErrorPage] = useState(false);

  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").max(20),
    password: yup.string().required("Must enter a password").max(20),
    confirmation_password: yup
      .string()
      .required("Please enter confirm your password")
      .max(20),
    first_name: yup.string().required("Must enter a first name").max(20),
    last_name: yup.string().required("Must enter a last name").max(20),
    profile_image: yup
      .string()
      .required("Must upload your profile image.")
      .max(20),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmation: "",
      first_name: "",
      last_name: "",
      profile_image: "",
      terms: false,
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status == 200) {
          setErrorPage("Successfully signed up");
        } else if (res.status == 400) {
          setErrorPage("Username already exists");
        }
      });
    },
  });

  return (
    <Form className="formContainer" onSubmit={formik.handleSubmitTask}>
      <h2 className="addAccount"> Sign Up Page </h2>
      <div className="formSignUp">
        <InputGroup className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label className="formFirstName"> First Name</Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                name="firstName "
                placeholder="Enter your first name"
                onChange={formik.handleInputChange}
                value={formik.values.firstName}
              />
              <p style={{ color: "red" }}> {formik.errors.firstName}</p>
            </Col>

            <Col lg="10">
              <Form.Label className="formLastName"> Last Name</Form.Label>
              <Form.Control
                id="lastName"
                type="text"
                name="lastName "
                placeholder="Enter your last name"
                onChange={formik.handleInputChange}
                value={formik.vlaues.lastName}
              />
              <p style={{ color: "red" }}> {formik.errors.lastName}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="10">
              <Form.Label className="formUserName"> username</Form.Label>
              <Form.Control
                id="username"
                type="text"
                name="username "
                placeholder="Enter your username"
                onChange={formik.handleInputChange}
                value={formik.vlaues.username}
              />
              <p style={{ color: "red" }}> {formik.errors.username}</p>
            </Col>
            <Col lg="10">
              <Form.Label className="formPassword"> Password </Form.Label>

              <Form.Control
                id="password"
                type="text"
                name="password "
                placeholder="Enter your password"
                onChange={formik.handleInputChange}
                value={formik.vlaues.password}
              />
              <p style={{ color: "red" }}> {formik.errors.lastName}</p>
            </Col>
            <Col lg="10">
              <Form.Label className="formPasswordConfirm">
                {" "}
                Password Confirmation
              </Form.Label>

              <Form.Control
                id="confirmation"
                type="text"
                name="confirmation "
                placeholder="Enter your password again"
                onChange={formik.handleInputChange}
                value={formik.vlaues.confirmation}
              />
              <p style={{ color: "red" }}> {formik.errors.confirmation}</p>
            </Col>
          </Row>
        </InputGroup>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
