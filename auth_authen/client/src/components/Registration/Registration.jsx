import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { redirect, useNavigate } from "react-router-dom";

function Registration() {
  const [validated, setValidated] = useState(false);
const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      console.log("some");
      event.stopPropagation();
    }else {
        const fname = form.firstName.value;
        const lname = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
  
        const userObj = {
          firstName: fname,
          lastName: lname,
          email,
          password,
        };
  
        axios.post('http://localhost:4000/api/v1/registration', userObj)
        .then(function (response) {
          alert("Registered");
          navigate('/login')
          
        })
        .catch(function (error) {
          alert("Registration Failed!");
        });
      }

    setValidated(true);
    
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Fist Name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom06">
          <Form.Label>Passowrd</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default Registration;
