//rfc
import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponenteAF = (props) => {
  //Breve introduccion a useState => es una funcion que nos permite crear un estado privado para este componente de tipo funcion

  // const [variable, metodo para actualizarlo] = useState(valor inicial)
  //El valor inicial puede ser otro tipo de dato, como un objeto
  const [age, setAge] = useState(59);

  const birthday = () => {
    //metodo que se encarga de actualizar el State
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name} desde un componente funcional!!</h1>
      <h2>Tu edad es de {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

ComponenteAF.propTypes = {
  name: PropTypes.string,
};

export default ComponenteAF;
