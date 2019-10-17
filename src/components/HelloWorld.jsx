import React from "react";

const HolaMundo = () => {
  const Hello = "Hola mundo";
  const isTrue = false;
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso esencial de React</h2>
      {isTrue ? <h4>esto es verdadero</h4> : <h5>soy falso</h5>}
      {isTrue && <h4>soy verdadero</h4>}
    </div>
  );
};

export default HolaMundo;
