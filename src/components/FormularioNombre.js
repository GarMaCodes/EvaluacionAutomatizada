import React from "react";
import Button from "./Button";
import "../css/FormularioNombre.css";

const FormularioNombre = ({
  labelText,
  userName,
  setUserName,
  setInicialState,
  setWindowVisibility,
  setWindowScale,
  setScreenVisibility,
}) => {
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = () => {
    if (typeof userName === "string") {
      if (userName.trim() !== "" && isNaN(parseInt(userName.trim()))) {
        setInicialState(true);
        setScreenVisibility("visible");
        setTimeout(() => {
          setWindowVisibility("visible");
          setWindowScale("scale(1, 1)");
        }, 1000);
      }
    }
  };

  return (
    <div className="formContainer">
      <form className="form">
        <label htmlFor="name">{labelText}</label>
        <input
          type="text"
          name="name"
          value={userName}
          onChange={handleChange}
        />

        <Button buttonText={"Continuar"} handleClick={handleClick} />
      </form>
    </div>
  );
};

export default FormularioNombre;
