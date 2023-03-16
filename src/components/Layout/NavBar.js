import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Button,Container } from "react-bootstrap";

const NavBar = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.replace("/");
  };

  return (
    <Navbar bg="primary" variant="dark">
  <Container className="d-flex justify-content-between">
    <Navbar.Brand>Expense Tracker</Navbar.Brand>
    <Button  onClick={logoutHandler} variant="danger">Logout</Button>
  </Container>
</Navbar>

  
  );
};

export default NavBar;
