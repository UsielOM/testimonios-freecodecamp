import React from 'react';

function Testimonio (){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
       src={require ('../assets/img/pokemon-pikachu.jpg')}
       alt='Foto de Pikachu'/>
      <div className='contendor-texto-testimonio'>
          <p className='nombre-testimonio'>Piakchu</p>
          <p className='cargo-testimonio'>Pokemon tipo trueno</p>
          <p className='texto-testimonio'>Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon. Es el Pokémon inicial de Pokémon Amarillo y Pokémon: Let's Go Pikachu!</p>
      </div>
    </div>
    
  );
}
export default Testimonio;