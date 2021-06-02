import React from "react";
import Incisos from "./Incisos";
import "../css/ExamField.css";

const ExamField = ({
  topic,
  index,
  show,
  actualQuestion,
  actualAnswers,
  setUserAnswer,
  examStarted,
}) => {
  return (
    <div className="question_answers">
      <div className="section">
        <h2>{topic}</h2>
      </div>

      <div className="questionBox">
        {!examStarted ? <p></p> : null}
        {examStarted && show ? (
          <div className="question">
            <div className="index">{index}.-</div>
            <div className="questionText">{actualQuestion}</div>
          </div>
        ) : null}

        {examStarted && show ? (
          <form className="answers">
            {actualAnswers.map((res, index) => {
              let letter;
              if (index === 0) letter = "a)";
              if (index === 1) letter = "b)";
              if (index === 2) letter = "c)";
              if (index === 3) letter = "d)";
              if (index === 4) letter = "e)";

              return (
                <Incisos
                  key={index}
                  res={res}
                  letter={letter}
                  setUserAnswer={setUserAnswer}
                />
              );
            })}
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default ExamField;
