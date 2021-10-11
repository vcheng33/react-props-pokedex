const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** */
function Pokecard({ name, id, type, exp }) {
    console.log("pokemon");
    return (
        <div>
            <h2>Name: { name }</h2>
            <img src={ `${IMAGE_URL}${id}.png` } alt="Pokemon"></img>
            <p>Type: { type }</p>
            <p>Experience: { exp }</p>
            { /** this is a comment */}
        </div>
    )
}

export default Pokecard;