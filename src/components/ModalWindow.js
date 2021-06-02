import React from "react";
import Button from "./Button";
import instructions from "../instructions";
import "../css/ModalWindow.css";

const ModalWindow = ({
  windowVisibility,
  windowScale,
  setWindowVisibility,
  inicialState,
  setWindowScale,
  setScreenVisibility,
  hitsTopic1,
  title,
  userName,
  buttonText,
  setExamStarted,
  setMixArray,
  topic1Questions,
  finalState,
  fontSize,
  lineHeight,
  time1,
  setTime1,
  time2,
  setInicialState,
  setUserName,
  setFinalState,
  setFirstQuestion,
  setHitsTopic1,
  setMistakesTopic1,
}) => {
  var totalMinutes = 0;
  var minutes = 0;
  var totalSeconds = 0;

  const noteTopic1 = (10 / 20) * hitsTopic1;

  const modalWindowStyle = {
    visibility: `${windowVisibility}`,
    transform: `${windowScale}`,
    fontSize: `${fontSize}`,
    lineHeight: `${lineHeight}`,
  };

  const handleClick = () => {
    setScreenVisibility("hidden");
    setWindowScale("scale(0,0)");
    setWindowVisibility("hidden");
    if (inicialState) {
      setMixArray(topic1Questions[0].answers);
      setExamStarted(true);
      setTime1(new Date().getTime());
      setInicialState(false);
    }
    if (finalState) {
      setUserName("");
      setFinalState(false);
      setFirstQuestion(true);
      setHitsTopic1(0);
      setMistakesTopic1(0);
    }
  };

  if (finalState) {
    totalSeconds = ((time2 - time1) / 1000).toFixed(0);
    while (totalSeconds >= 60) {
      totalSeconds = (totalSeconds - 60).toFixed(0);
      minutes = minutes + 60;
    }
    totalMinutes = minutes / 60;
  }

  return (
    <div id="modalWindow" style={modalWindowStyle}>
      <h1>
        {title} {userName}
      </h1>

      {inicialState ? <p>{instructions}</p> : null}

      {finalState ? (
        <p>
          Aciertos: &nbsp;{hitsTopic1}/20
          <br />
          Calificación: &nbsp;{noteTopic1}
          <br />
          Tiempo total: {totalMinutes}min {totalSeconds}sec
        </p>
      ) : null}

      <Button buttonText={buttonText} handleClick={handleClick} />
    </div>
  );
};

export default ModalWindow;
