import React from "react";
import ProfileForm from "./ProfileForm";

const ProfileUpdate = () => {
  return (
    <>
      <div
        className="m-3 d-flex justify-content-between align-items-center"
        style={{
          borderBottom: "1px solid #ccc",
        }}
      >
        <p>
          <i> Winners never quite, Quitters never win.</i>
        </p>
        <p
          className="text-end  ml-auto px-3 py-2 "
          style={{ width: "25rem", backgroundColor: "#ccc",borderRadius: "10px" }}
        >
          <i>
            Your profile is <b>64%</b> completed. A complete profile has a
            higher chance of landing a job.
            <b
              style={{
                cursor: "pointer",
                color: "blue",
              }}
            >
              {" "}
              Complete now
            </b>
          </i>
        </p>
      </div>
      <div>
        <ProfileForm />
      </div>
    </>
  );
};

export default ProfileUpdate;
