import Pokedex from './Pokedex';
import { shuffle } from './helpers';

/** Takes in an array of pokemon and creates two 
 *  arrays of random pokemon (two hands). 
 */
function Pokegame({ pokedex }) {
    const shuffledPokedex = shuffle(pokedex);
    const midPoint = Math.floor(shuffledPokedex.length / 2);

    const hand1 = shuffledPokedex.slice(0, midPoint);
    const hand2 = shuffledPokedex.slice(midPoint);

    const totalExp1 = hand1.reduce((acc, p) => acc + p.base_exp);
    const totalExp2 = hand2.reduce((acc, p) => acc + p.base_exp);

    return (
        <div>
            <div className="Pokegame-hand1 container">
                <Pokedex
                    pokedex={hand1}
                    hand={1}
                    isWinner={totalExp1 > totalExp2}
                />
            </div>
            <div className="Pokegame-hand2 container">
                <Pokedex
                    pokedex={hand2}
                    hand={2}
                    isWinner={totalExp2 > totalExp1}
                />
            </div>
        </div>);
}

export default Pokegame;