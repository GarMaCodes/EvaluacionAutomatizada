import React from "react";
import "../css/DarkScreen.css";

const DarkScreen = ({ screenVisibility }) => (
  <div className="screen" style={{ visibility: `${screenVisibility}` }}></div>
);

export default DarkScreen;
