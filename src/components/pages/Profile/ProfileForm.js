import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

const ProfileForm = () => {
  const [profile, setProfile] = useState({ name: "", photoUrl: "" });
  const nameInputRef = useRef();
  const profilePhotoRef = useRef();

  //fetch profile when refreshes
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA",
          {
            idToken: token,
          }
        )
        .then((res) => {
          console.log(res.data.users[0].displayName);
          setProfile({
            name: res.data.users[0].displayName || "",
            photoUrl: res.data.users[0].photoUrl || "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    const fullName = nameInputRef.current.value;
    const profilePhoto = profilePhotoRef.current.value;
    const idToken = localStorage.getItem("token");

    const requestData = {
      displayName: fullName,
      photoUrl: profilePhoto,
      returnSecureToken: true,
    };

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDIus7yBYANWAFKjKvWbncBM2T09RJUNJA`,
        {
          idToken,
          ...requestData,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("userdetails has been updated");
      })
      .catch((err) => {
        console.log(err.message);
        // handle error case here
      });
  };

  const onNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };

  const onPhotoUrlChange = (e) => {
    setProfile({ ...profile, photoUrl: e.target.value });
  };

  return (
    <section
      style={{
        marginTop: "2rem",
        marginLeft: "15rem",
        marginRight: "2rem",
        padding: "2rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Row className="mb-3">
        <Col className="p-2">
          <h3>Contact Details</h3>
        </Col>
        <Col className="text-end">
          <Link to="/welcome">
            <button className="btn btn-outline-danger mt-1 ">Cancel</button>
          </Link>
        </Col>
      </Row>

      <Form onSubmit={updateProfileHandler} className="form-inline">
        <Row className="mb-3 form-inline">
          <Col>
            <Form.Label>Full Name:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              onChange={onNameChange}
              ref={nameInputRef}
              style={{ width: "20rem" }}
            />
          </Col>
          <Col>
            <Form.Label>Profile Photo URL:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              onChange={onPhotoUrlChange}
              ref={profilePhotoRef}
              style={{ width: "20rem" }}
            />
          </Col>
        </Row>
        <button type="submit" className="btn btn-danger">
          Update
        </button>
      </Form>
    </section>
  );
};

export default ProfileForm;
