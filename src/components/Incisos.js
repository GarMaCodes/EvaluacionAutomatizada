import React, { Fragment } from "react";
import "../css/Incisos.css";

const Incisos = ({ res, letter, setUserAnswer }) => {
  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <Fragment>
      <input
        type="radio"
        className="answer"
        name="answers"
        value={res}
        onChange={handleChange}
      />
      &nbsp;&nbsp;{letter}&nbsp;&nbsp;{res} <br />
    </Fragment>
  );
};

export default Incisos;
