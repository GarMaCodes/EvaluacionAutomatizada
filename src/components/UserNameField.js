import React from "react";
import "../css/UserNameField.css";

const UserNameField = ({ userName }) => {
  return (
    <div className="subjectName">
      <h2>{userName}</h2>
    </div>
  );
};

export default UserNameField;
