import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemonByName } from "../services/FetchPokemon";
import PokeCard from "../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";


const Battle = () => {

    const {name} = useParams()
    const [pokemon, setPokemon] = useState("")
    const [opponent, setOpponent] = useState("")
    const [loading, setLoading] = useState(true)
    
    const randomPokemon = () =>{
        const randomIndex = Math.floor(Math.random() * 100)
        fetchPokemonByName(randomIndex)
        .then(response => 
            setOpponent(response)
        )
    }

    useEffect(()=>{
        fetchPokemonByName(name)
        .then(response => {
            setPokemon(response)
            setOpponent(response)
            setLoading(false)
            })
    }, [])

    return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
                    <h1>Battle against yourself</h1>
                    <h2>Randomizer works pls check code :D</h2>
					<PokeCard pokeInfo={pokemon}/>
                    <h1>VS</h1>
                    <PokeCard pokeInfo={opponent}/>
				</div>
			)}

            <button onClick={()=>navigate("/rankings")}>rankings</button>

		</div>
	);
}

export default Battle;