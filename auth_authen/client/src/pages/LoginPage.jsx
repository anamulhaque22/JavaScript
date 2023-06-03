import React from "react";
import Login from "../components/Login/Login";
import { Col, Container, Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
