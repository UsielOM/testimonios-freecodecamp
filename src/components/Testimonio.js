import React from 'react';
import '../stylesheets/Testimoni.css';
function Testimonio (props) {
  return (
    <div className='contenedor-testimonio  '>
      <img className='imagen-testimonio' 
       src={require (`../assets/img/pokemon-${props.img}.jpg`)}
       alt='Foto de Pikachu'/>
      <div className='contendor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.name} </p>
          <p className='cargo-testimonio'>Pokemon tipo: {props.type}</p>
          <p className='texto-testimonio'>"{props.description}"</p>
      </div>
    </div>
    
  );
}
export default Testimonio;