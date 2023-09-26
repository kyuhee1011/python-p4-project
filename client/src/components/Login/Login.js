import React from "react";
import "./Logincss";
import { useState } from "react";
import { useFormik } from "formik";
// import { Container } from "react-bootstrap";
import * as yup from "yup";

function LogIn() {
  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username"),
    password: yup.string().required("Must enter a password"),
  });

  return <h2>login</h2>;
}

export default LogIn;
