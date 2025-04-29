import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";
import PokeCard from "../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [pokemon, setPokemon] = useState("")
    const [pokeQuery, setPokeQuery] = useState("pikachu")
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        fetchPokemonByName(pokeQuery)
        .then(response => {
            setPokemon(response)
            console.log(response)
            setLoading(false)})
        console.log(pokemon + "pokiminowe")
    }, [pokeQuery])

    const setQuery = (event) =>{
        setPokeQuery(event.target.value)
    }

    return (
		<div>
            <input onchange={setQuery}></input>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					<PokeCard pokeInfo={pokemon}/>
				</div>
			)}

            <button onClick={()=>navigate(`/battle/${pokemon.name}`)}>BATTLE</button>

		</div>
	);

    
}

export default Home;