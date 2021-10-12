
import Pokegame from './Pokegame';
import './App.css';

const ALL_POKEMON = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_exp: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_exp: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_exp: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_exp: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_exp: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_exp: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_exp: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_exp: 65}
];

/** App that runs the Pokegame */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Pokegame pokedex={ALL_POKEMON} />
        </div>
      </header>
    </div>
  );
}

export default App;
