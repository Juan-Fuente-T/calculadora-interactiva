import React from 'react';
import '../stylesheets/Boton.css';

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.' && (valor !== '='))
  }

  return(
    <button
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
    {props.children}
    </button>
     /*trimEnd() eliminar el espacio en blanco al final de la cadena*/
    )
}

export default Boton;