import Pokecard from './Pokecard';

function Pokedex({ pokedex }) {
    console.log("pokedex,", pokedex);
    return (
        <div>
            {pokedex.map(p => <div><Pokecard name={p.name} type={p.type} id={p.id} exp={p.base_experience}/></div>)} 
        </div>
    )
}

export default Pokedex;
// props => {}, props.pokemon => {pokemon}