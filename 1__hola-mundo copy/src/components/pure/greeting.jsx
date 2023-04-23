import React, { Component } from "react";
import PropTypes from "prop-types"; //son el contenido que yo le puedo pasar a un componente desde un componente de orden superior. Nos sirven para especificar el tipo de dato que estamos pasandole. En este ejemplo le pasamos name "ibai" y es un string, pero si le pasamos cualquier otro dato primitivo tambien lo cogeria, asi que necesitamos controlar que tipos de datos le pasamos, ya que JavaScript es un lenguaje de tipo inferido, debil... tenemos que buscarnos las maneras para que la gente utilice correctamente nuestros componentes.

class ComponenteA extends Component {
  constructor(props) {
    //props: informacion que le pasamos al componente
    super(props);
    this.state = {
      //estado: informacion privada del componente que sirve para hacer algun tipo de gestion internamente. No es visible en el exterior ni es modificable, es una informacion estatica e inmutable, aunque podemos generar nuevos estados que implican una nueva renderizacion
      edad: 25,
    };
  }
  render() {
    return (
      <div>
        <h1>
          Tengo {this.state.edad} años y me llamo {this.props.name}{" "}
          {this.props.surname}
          {/* Accedemos al name que le hemos pasado en el App.js a componenteA */}
        </h1>
        <div>
          <button onClick={this.birthday}>Click para cumplir años</button>{" "}
          {/* LLamamos con el metodo onClick a la funcion birthday, que nos actualiza el estado que hemos definido en el constructor (this.state) */}
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      edad: prevState.edad + 1, //Este estado es el que implica una nueva reenderizacion en la vista
    }));
  };
}

ComponenteA.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
}; //aqui podemoss especificarle al nombre que tipo de datos es

export default ComponenteA;
