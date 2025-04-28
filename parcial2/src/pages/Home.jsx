import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";


const Home = () => {

    const [pokemon, setPokemon] = useState("")
    const [pokeQuery, setPokeQuery] = useState("pikachu")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchPokemonByName(pokeQuery)
        .then(response => {
            setPokemon(response)
            console.log(response)
            setLoading(false)})
        console.log(pokemon + "pokiminowe")
    }, [])

    return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h1>{pokemon.name}</h1>
                    <p>HP: {pokemon.stats[0].base_stat}</p>
                    <p>HP: {pokemon.stats[1].base_stat}</p>
                    <p>HP: {pokemon.stats[2].base_stat}</p>
                    <p>HP: {pokemon.stats[3].base_stat}</p>
				</div>
			)}
		</div>
	);

    
}

export default Home;