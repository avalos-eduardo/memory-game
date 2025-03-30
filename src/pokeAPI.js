const pokemonNames = ["charmander", "bulbasaur", "squirtle", "pikachu", "torchic", "chimchar", "mew", "jigglypuff"];

export const getPokemon = async () => {
    try {
        const pokePromises = pokemonNames.map(async (pokemon) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            return {
                id: crypto.randomUUID(),
                name: data.forms[0].name,
                image: data.sprites.front_default,
            }
        })

        const pokemon = await Promise.all(pokePromises);
        return pokemon;
    } 
    catch (error) {
        console.error("Error fetching pokemon:", error);
        return [];
    }
}