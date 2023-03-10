import React from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const profileUpdateHandler = () => {
    history.push("/updateprofile");
  };

  return (
    <div
      className="m-3 d-flex justify-content-between align-items-center"
      style={{
        borderBottom: "1px solid #ccc",
      }}
    >
      <p>
        <i>WELCOME TO EXPENSE TRACKER!!!</i>
      </p>
      <p
        className="text-end bg-light-ash  ml-auto px-3 py-2 "
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
    </div>
  );
};

export default Welcome;
