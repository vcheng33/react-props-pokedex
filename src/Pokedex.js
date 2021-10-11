import Pokecard from './Pokecard';

function Pokedex({ pokedex, hand, isWinner}) {
    console.log("pokedex,", hand, pokedex);
    return (
        <div>
            <h1>Hand {hand}</h1>
            {pokedex.map(p => <div><Pokecard
                                        name={p.name}
                                        type={p.type}
                                        id={p.id}
                                        exp={p.base_experience}
                                    /></div>)} 
        {isWinner ? <h3>THIS HAND WINS!</h3> : <h3>THIS HAND LOSES!</h3>}
        </div>
    )
}

export default Pokedex;
// props => {}, props.pokemon => {pokemon}