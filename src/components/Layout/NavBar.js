import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="m-2">
        <Container>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
        </Container>
      </div>
    </Navbar>
  );
};

export default NavBar;
