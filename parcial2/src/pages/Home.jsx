import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";
import PokeCard from "../components/PokeCard/PokeCard";


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
					<PokeCard pokeInfo={pokemon}/>
				</div>
			)}
		</div>
	);

    
}

export default Home;