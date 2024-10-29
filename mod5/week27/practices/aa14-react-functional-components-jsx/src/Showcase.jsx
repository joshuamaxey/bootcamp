function Showcase() { // All components (including functions) are capitalized in JSX

    const favPokemon = "Pikachu"

    const pokeCharacteristics = {
        type: "Electric",
        move: "Volt Tackle"
    }

    const pokeImage = "../src/images/Pikachu.jpg"

    return ( // recall that JSX will always be created in the return statement because it returns a single element
        <div>
            <h1>{favPokemon}&apos;s Showcase Component</h1>

            <br></br>

            <img src={ pokeImage }></img>

            <br></br>

            <h2>{ favPokemon }&apos;s type is { pokeCharacteristics.type } and one of their moves is { pokeCharacteristics.move } </h2>
        </div>
    );
}

export default Showcase;
