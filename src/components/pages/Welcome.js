import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const profileUpdateHandler = () => {
    history.push("/updateprofile");
  };

  const verifyEmailHandler = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA",
        {
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Login your account before veryfying.");

        console.log(err.code);
      });
  };

  return (
    <>
      <div
        className="m-3 d-flex justify-content-between align-items-center"
        style={{
          borderBottom: "1px solid #ccc",
        }}
      >
        <i>WELCOME TO EXPENSE TRACKER!!!</i>
        <div className="text-end d-flex">
          <p
            className="text-end bg-light-ash  px-3 py-2 "
            style={{ backgroundColor: "#ccc", borderRadius: "10px" }}
          >
            <i>
              Your profile is incomplete.
              <span
                onClick={profileUpdateHandler}
                style={{
                  cursor: "pointer",
                  color: "blue",
                }}
              >
                Complete Now
              </span>
            </i>
          </p>
          <Button
            className="mb-3 ms-2"
            variant="danger"
            onClick={verifyEmailHandler}
          >
            Verify Your Email
          </Button>
        </div>
      </div>

    </>
  );
};

export default Welcome;
