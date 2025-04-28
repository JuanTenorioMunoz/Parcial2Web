import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";

const Home = () => {

    const [pokemon, setPokemon] = useState("")
    const [pokeQuery, setPokeQuery] = useState("ditto")

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
        <h1>{pokeQuery}</h1>
        <p>{}</p>
        </>
    )
}

export default Home;