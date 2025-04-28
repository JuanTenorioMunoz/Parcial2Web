import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";


const Home = () => {

    const [pokemon, setPokemon] = useState("")
    const [pokeQuery, setPokeQuery] = useState("pikachu")

    useEffect(()=>{
        fetchPokemonByName(pokeQuery)
        .then(response => {
            setPokemon(response)
            console.log(response)})
        console.log(pokemon + "pokiminowe")
    }, [])

//HP, ataque, defensa, nombre

    return(
        <>
            <h1>{pokemon.name}</h1>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>HP: {pokemon.stats[1].base_stat}</p>
            <p>HP: {pokemon.stats[2].base_stat}</p>
            <p>HP: {pokemon.stats[3].base_stat}</p>
        </>
    )
}

export default Home;