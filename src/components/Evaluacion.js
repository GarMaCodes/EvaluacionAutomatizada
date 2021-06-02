import React, { useState } from "react";
import UserNameField from "./UserNameField";
import ExamField from "./ExamField";
import CuentaRegresiva from "./CuentaRegresiva";
import Button from "./Button";
import "../css/Evaluacion.css";

const Evaluacion = ({
  title,
  userName,
  topic,
  topic1Questions,
  inicialState,
  setMixArray,
  actualQuestion,
  setActualQuestion,
  actualAnswers,
  setActualAnswers,
  setScreenVisibility,
  setWindowVisibility,
  setWindowScale,
  hitsTopic1,
  setHitsTopic1,
  mistakesTopic1,
  setMistakesTopic1,
  userAnswer,
  setUserAnswer,
  examStarted,
  setExamStarted,
  setFinalState,
  setTime2,
}) => {
  const [index, setIndex] = useState(1);

  const [show, setShow] = useState(true);

  const [clearTimer, setClearTimer] = useState(false);

  const indexLastQuestion = index - 1;

  const handleClick = () => {
    setClearTimer(true);
  };

  /*La siguiente función ejecuta el código para el cambio de pregunta*/
  const nextQuestion = () => {
    if (index < topic1Questions.length) {
      evaluateAnswers(indexLastQuestion, userAnswer);
      setMixArray(topic1Questions[index].answers);
      clearRadioButtons("answers");
      setActualQuestion(topic1Questions[index].question);
      setActualAnswers(topic1Questions[index].answers);
      setIndex(index + 1);
    }

    if (index === topic1Questions.length) {
      evaluateAnswers(indexLastQuestion, userAnswer);
      setTime2(new Date().getTime());
      setExamStarted(false);
      setFinalState(true);
      setMixArray(topic1Questions);
      setScreenVisibility("visible");
      setTimeout(() => {
        setWindowVisibility("visible");
        setWindowScale("scale(1,1)");
      }, 1000);
    }
  };

  /*La siguiente función limpia los radio buttons*/
  const clearRadioButtons = (groupName) => {
    let radioButtons = document.getElementsByName(groupName);

    for (let i = 0; i < radioButtons.length; i++) {
      let rb = radioButtons[i];
      rb.checked = false;
    }
  };

  /*La siguiente función determina si la respuesta del usuario es correcta o no*/
  const evaluateAnswers = (index, answer) => {
    if (answer !== topic1Questions[index].correctAnswer) {
      setMistakesTopic1(mistakesTopic1 + 1);
    } else {
      setHitsTopic1(hitsTopic1 + 1);
    }

    setUserAnswer("");
  };

  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <UserNameField userName={userName} />

      <ExamField
        topic={topic}
        inicialState={inicialState}
        index={index}
        show={show}
        actualQuestion={actualQuestion}
        actualAnswers={actualAnswers}
        setUserAnswer={setUserAnswer}
        examStarted={examStarted}
      />

      <div className="otherInfo">
        {examStarted ? (
          <CuentaRegresiva
            examStarted={examStarted}
            setShow={setShow}
            nextQuestion={nextQuestion}
            clearTimer={clearTimer}
            setClearTimer={setClearTimer}
            index={index}
            topic1Questions={topic1Questions}
          />
        ) : null}
        <Button buttonText={"Siguiente pregunta"} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Evaluacion;
