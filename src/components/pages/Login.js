import React, { useState, useRef } from "react";
import axios from "axios";
import { Form, Card, Container } from "react-bootstrap";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const switchLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA";
    }

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("ReEntered password is incorrect");
    }

    axios
      .post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then((response) => {
        console.log(response.data.idToken);
        console.log("User has successfully signed up");
      })
      .catch((err) => {
        alert("Authentication Failed");
      });
  };

  return (
    <section style={{ marginTop: "8rem" }}>
      <Container className="justify-content-center d-flex">
        <Card className="text-center p-2" style={{ width: "25rem" }}>
          <h3>{isLogin ? "Login" : "Sign Up"}</h3>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  ref={emailInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  minLength="6"
                  placeholder="password"
                  ref={passwordInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="password"
                  minLength="6"
                  placeholder="confirm password"
                  ref={confirmPasswordRef}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <button size="lg" className="btn btn-primary mb-2">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
              <p>
                {isLogin
                  ? "Dont have an account? "
                  : "Already have an account? "}
                <span
                  onClick={switchLoginHandler}
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
