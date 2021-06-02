import React, { useState, useEffect, useRef } from "react";
import "../css/CuentaRegresiva.css";

const CuentaRegresiva = ({
  examStarted,
  nextQuestion,
  setShow,
  clearTimer,
  setClearTimer,
  index,
  topic1Questions,
}) => {
  const [seconds, setSeconds] = useState(59);
  const [color, setColor] = useState("green");

  const timer = useRef(null);

  useEffect(() => {
    if (examStarted) {
      if (seconds >= 0) {
        setShow(true);
        timer.current = setTimeout(() => {
          if (!clearTimer) {
            setSeconds(seconds - 1);
          } else {
            setSeconds(-1);
            setShow(false);
          }
          if (seconds <= 21 && seconds > 0) {
            setColor("red");
          } else {
            setColor("green");
          }
        }, 1000);
      }
    } else {
      clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (seconds < 0) {
      setClearTimer(false);
      setShow(false);
      setTimeout(() => {
        if (index < topic1Questions.length) {
          setSeconds(59);
        }
        nextQuestion();
      }, 1000);
    } //eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="timer">
      {seconds >= 0 ? <p style={{ color: `${color}` }}>{seconds} sec</p> : null}
    </div>
  );
};

export default CuentaRegresiva;
