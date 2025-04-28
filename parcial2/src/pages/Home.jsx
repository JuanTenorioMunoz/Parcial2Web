import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";

const Home = () => {

    const [pokemon, setPokemon] = useState("")
    const [pokeQuery, setPokeQuery] = useState("pokemon/ditto")

    useEffect(()=>{
        fetchPokemonByName(pokeQuery)
        .then(response => {
            setPokemon(response)
            console.log(response)})
        console.log(pokemon + "pokiminowe")
    }, [])

    return(
        <>
        <p>HOME</p>

        </>
    )
}

export default Home;