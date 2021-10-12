import Pokecard from './Pokecard';

/** Takes in an array of pokemon (in pokedex),
 *  hand number and whether this hand is a winner
 * 
 */
function Pokedex({ pokedex, hand, isWinner }) {
    console.log("pokedex,", hand, pokedex);
    return (
        <section className="row">
            <div className="col-12">
                <h1>Hand {hand}</h1>
            </div>
            {pokedex.map(p => <div className="col">
                <Pokecard
                    name={p.name}
                    type={p.type}
                    id={p.id}
                    exp={p.base_exp}
                />
            </div>)}
            <div className="col-12 mb-5">
                {
                    isWinner
                        ? <h3>THIS HAND WINS!</h3>
                        : <h3>THIS HAND LOSES!</h3>
                }
            </div>
        </section>
    )
}

export default Pokedex;
// props => {}, props.pokemon => {pokemon}