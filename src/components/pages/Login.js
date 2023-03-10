import React, { useState, useRef } from "react";
import axios from "axios";
import { Form, Card, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

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

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword && !isLogin) {
      alert("Entered password is incorrect");
      return;
    }

    if (!email || !password || (!isLogin && !confirmPassword)) {
      alert("Please fill in all required fields");
      return;
    }

    axios
      .post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.idToken;
          localStorage.setItem("token", token);
          history.push("/welcome");
          console.log(response.data.idToken);
          console.log("User has successfully signed up");
          console.log(response);
        }
      })
      .catch((err) => {
        alert("Authentication Failed");
      });
  };

  return (
    <section style={{ marginTop: "8rem", marginLeft: "28rem" }}>
      <Container className="justify-content-center ">
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
              {!isLogin && (
                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    minLength="6"
                    placeholder="confirm password"
                    ref={confirmPasswordRef}
                  />
                </Form.Group>
              )}
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  size="lg"
                  className="btn btn-primary mb-2"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
              {isLogin ? <Link to="/resetpassword">Forgot Password?</Link> : ""}
            </Form>
          </Card.Body>
        </Card>
        <Alert
          className="mt-3 text-center"
          variant="primary"
          style={{ width: "25rem" }}
        >
          {isLogin ? "Dont have an account? " : "Already have an account? "}
          <Alert.Link href="#" onClick={switchLoginHandler}>
            {isLogin ? "SignUp" : "Login"}
          </Alert.Link>
        </Alert>
      </Container>
    </section>
  );
};

export default Login;
