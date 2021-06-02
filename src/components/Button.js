import React from "react";
import "../css/Button.css";

const Button = ({ buttonText, handleClick }) => {
  return (
    <div className="nextButton" onClick={handleClick}>
      {buttonText}
    </div>
  );
};

export default Button;
