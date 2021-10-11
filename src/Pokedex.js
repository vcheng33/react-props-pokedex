import Pokecard from './Pokecard';

/** Takes in an array of pokemon (in pokedex),
 *  hand number and whether this hand is a winner
 * 
 */
function Pokedex({ pokedex, hand, isWinner }) {
    console.log("pokedex,", hand, pokedex);
    return (
        <div className="row">
            <div><h1>Hand {hand}</h1></div>
            {pokedex.map(p => <div className="col-2"><Pokecard
                name={p.name}
                type={p.type}
                id={p.id}
                exp={p.base_experience}
            /></div>)}
            <div className="row">{isWinner ? <h3>THIS HAND WINS!</h3> : <h3>THIS HAND LOSES!</h3>}</div>
        </div>
    )
}

export default Pokedex;
// props => {}, props.pokemon => {pokemon}