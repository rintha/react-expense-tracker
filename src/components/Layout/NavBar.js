import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap";

const NavBar = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.replace("/login");
  };

  const goToExpensePage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      history.replace("/expenses");
    } else {
      history.replace("/login");
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          <Navbar.Brand
            style={{
              cursor: "pointer",
            }}
            onClick={goToExpensePage}
          >
            My Expenses
          </Navbar.Brand>
          <Button onClick={logoutHandler} variant="danger">
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
