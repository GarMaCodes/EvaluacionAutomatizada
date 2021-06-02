import React, { useState, useEffect } from "react";
import topic1Questions from "./exam";
import Evaluacion from "./components/Evaluacion";
import FormularioNombre from "./components/FormularioNombre";
import DarkScreen from "./components/DarkScreen";
import ModalWindow from "./components/ModalWindow";
import "../src/css/App.css";

function App() {
  const [topicName] = useState(topic1Questions[0].name);

  const [mixArray, setMixArray] = useState(topic1Questions);

  const [time1, setTime1] = useState(0);

  const [time2, setTime2] = useState(0);

  const [userName, setUserName] = useState("");

  const [examStarted, setExamStarted] = useState(false);

  const [firstQuestion, setFirstQuestion] = useState(true);

  const [actualQuestion, setActualQuestion] = useState("");

  const [actualAnswers, setActualAnswers] = useState([]);

  const [inicialState, setInicialState] = useState(false);

  const [finalState, setFinalState] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");

  const [screenVisibility, setScreenVisibility] = useState("hidden");

  const [windowVisibility, setWindowVisibility] = useState("hidden");

  const [windowScale, setWindowScale] = useState("scale(0,0)");

  const [mistakesTopic1, setMistakesTopic1] = useState(0);

  const [hitsTopic1, setHitsTopic1] = useState(0);

  useEffect(() => {
    /*La siguiente función mezcla todos los arrays del programa*/
    for (let i = mixArray.length - 1; i > 0; i--) {
      let indiceAleatorio = Math.floor(Math.random() * (i + 1));
      let temporal = mixArray[i];
      mixArray[i] = mixArray[indiceAleatorio];
      mixArray[indiceAleatorio] = temporal;
    }
    if (firstQuestion === true) {
      setActualQuestion(topic1Questions[0].question);
      setMixArray(topic1Questions[0].answers);
      setActualAnswers(topic1Questions[0].answers);
      setFirstQuestion(false);
    } //eslint-disable-next-line
  }, [mixArray]);

  return (
    <div className="App">
      <DarkScreen screenVisibility={screenVisibility} />

      {inicialState ? (
        <ModalWindow
          windowVisibility={windowVisibility}
          setWindowVisibility={setWindowVisibility}
          windowScale={windowScale}
          setWindowScale={setWindowScale}
          setScreenVisibility={setScreenVisibility}
          setExamStarted={setExamStarted}
          title={"Bienvenid@ "}
          userName={userName}
          buttonText={"Iniciar prueba"}
          inicialState={inicialState}
          setMixArray={setMixArray}
          topic1Questions={topic1Questions}
          fontSize={"15px"}
          lineHeight={"30px"}
          setTime1={setTime1}
          setInicialState={setInicialState}
        />
      ) : null}

      {finalState ? (
        <ModalWindow
          windowVisibility={windowVisibility}
          setWindowVisibility={setWindowVisibility}
          windowScale={windowScale}
          setWindowScale={setWindowScale}
          setScreenVisibility={setScreenVisibility}
          hitsTopic1={hitsTopic1}
          mistakesTopic1={mistakesTopic1}
          title={"Examen de "}
          userName={userName}
          buttonText={"Aceptar"}
          finalState={finalState}
          fontSize={"28px"}
          lineHeight={"50px"}
          time1={time1}
          time2={time2}
          setUserName={setUserName}
          setFinalState={setFinalState}
          setFirstQuestion={setFirstQuestion}
          setHitsTopic1={setHitsTopic1}
          setMistakesTopic1={setMistakesTopic1}
        />
      ) : null}

      {!examStarted ? (
        <FormularioNombre
          labelText={"Nombre completo: "}
          userName={userName}
          setUserName={setUserName}
          inicialState={inicialState}
          setInicialState={setInicialState}
          setWindowVisibility={setWindowVisibility}
          setWindowScale={setWindowScale}
          setScreenVisibility={setScreenVisibility}
        />
      ) : (
        <Evaluacion
          title={"Evaluación Automatizada"}
          userName={userName}
          topic={topicName}
          topic1Questions={topic1Questions}
          examStarted={examStarted}
          setExamStarted={setExamStarted}
          setMixArray={setMixArray}
          actualQuestion={actualQuestion}
          setActualQuestion={setActualQuestion}
          actualAnswers={actualAnswers}
          setActualAnswers={setActualAnswers}
          setScreenVisibility={setScreenVisibility}
          setWindowVisibility={setWindowVisibility}
          setWindowScale={setWindowScale}
          hitsTopic1={hitsTopic1}
          setHitsTopic1={setHitsTopic1}
          mistakesTopic1={mistakesTopic1}
          setMistakesTopic1={setMistakesTopic1}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          setFinalState={setFinalState}
          setTime2={setTime2}
        />
      )}

      <div className="owner">
        <p>&copy;2021 GarmaCodes</p>
      </div>
    </div>
  );
}

export default App;
