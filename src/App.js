import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (

    <div className="App">
      <div className='contenedor-principal'>
        
      <h1>Estos son mis pokemones favoritos: </h1>
      </div>
      <Testimonio 
      name='Pikachu'
      type='Trueno'
      description='Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon. Es el Pokémon inicial de Pokémon Amarillo y Pokémon: Letsgo Pikachu'
      img = 'pikachu'
      />
           <Testimonio 
      name='Eevee'
      type='Normal'
      description='Eevee es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más evoluciones posibles, con ocho. Es el Pokémon inicial del rival en Pokémon Amarillo y en Pokémon: Lets Go, Pikachu! y del protagonista en Pokémon: Lets Go, Eevee!.'
      img = 'eevee'
      />

<Testimonio 
      name='Elekid'
      type='Trueno'
      description='Elekid es un Pokémon bebé de tipo eléctrico introducido en la segunda generación. Se trata de un Pokémon adelantado.'
      img = 'elekid'
      />
    </div>
  );
}

export default App;
