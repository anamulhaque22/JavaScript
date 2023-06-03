import React, { Fragment } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/login')
  }
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={Link}>Authentication and Authorization</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              {!localStorage.getItem("token") && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
              <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              <Nav.Link as={Link} to="/addProduct">Private Route</Nav.Link>
              {token && <Button onClick={logout}>Logout</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Menu;
