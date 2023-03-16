import axios from "axios";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import {
  Form,
  FloatingLabel,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ResetPwd = () => {
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailInputRef.current.value;
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA",
        {
          requestType: "PASSWORD_RESET",
          email: email,
        }
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            className="text-center p-4 bg-light text-dark"
            style={{ width: "35rem" }}
          >
            <Form onSubmit={resetPasswordHandler}>
              <Form.Label>
                Enter the email with which you have registered.
              </Form.Label>
              <FloatingLabel
                controlId="floatingInput"
                label="Your Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  ref={emailInputRef}
                />
              </FloatingLabel>
              <Button
                variant="primary"
                type="submit"
                className="m-2"
                style={{ padding: "0.5rem 5rem" }}
              >
                Send Link
              </Button>
              {isLoading && <p>Loading...</p>}
              <p>
                Already a user?
                <Link to="/">
                  <span>Login</span>
                </Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPwd;
