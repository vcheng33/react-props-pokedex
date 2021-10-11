import Pokedex from './Pokedex';
import shuffle from './helpers';

function Pokegame({ pokedex}) {
    const shuffledPokedex = shuffle(pokedex);

    const hand1 = shuffledPokedex.slice(0,Math.floor(shuffledPokedex.length/2));
    const hand2 = shuffledPokedex.slice(Math.floor(shuffledPokedex.length/2));
    
    const totalExp1 = hand1.reduce(function(acc,pokemon){
        return acc+pokemon.base_experience;
    });
    const totalExp2 = hand2.reduce(function(acc,pokemon){
        return acc+pokemon.base_experience;
    });
        
    console.log('hand1,',hand1);
    console.log('hand2,',hand2);

    return(<div>
        <div class="hand1"><Pokedex pokedex={hand1} hand={1} isWinner = {totalExp1 > totalExp2} /></div>
        <div class="hand2"><Pokedex pokedex={hand2} hand={2} isWinner = {totalExp2 > totalExp1} /></div>
    </div>);
}

export default Pokegame;