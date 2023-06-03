import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [validated, setValidated] = useState(false);
    const naviagate = useNavigate();
    console.log(localStorage.getItem("token"))
    useEffect(() => {
        if(localStorage.getItem("token")){
            console.log("some")
            naviagate('/');
        }
    }, [naviagate])
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        console.log("some");
        event.stopPropagation();
      }else {
        const email = form.email.value.toLowerCase();
        const password = form.password.value;
  
        const userObj = {
          email,
          password,
        };
        console.log(userObj)
        axios.post('http://localhost:4000/api/v1/login', userObj)
        .then(response => {
            const {data} = response;
            localStorage.setItem('token', JSON.stringify(data.data.token));
            naviagate('/')
        })
        .catch(error => {
            alert("Login Failed!")
        })
      }
  
      setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="12" controlId="validationCustom04">
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

        <Form.Group as={Col} md="12" controlId="validationCustom05">
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
};

export default Login;