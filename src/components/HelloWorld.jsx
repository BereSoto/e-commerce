import React from "react";
import '../assets/styles/App.scss'

const HolaMundo = () => {
  const Hello = "Hola mundo";
  const isTrue = false;
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
    </div>
  );
};

export default HolaMundo;
