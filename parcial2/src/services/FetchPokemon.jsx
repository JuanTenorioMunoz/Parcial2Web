const apiURL = "https://pokeapi.co/api/v2/"

export const fetchPokemonByName = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
}

