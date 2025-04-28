import { useParams } from "react-router-dom";

const Battle = () => {

    const {name} = useParams()
    const [pokemon, setPokemon] = useState("")
    
    useEffect(()=>{
        fetchPokemonByName(name)
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
                    <h1>Battle</h1>
					<PokeCard pokeInfo={pokemon}/>
				</div>
			)}

            <button onClick={()=>navigate("/rankings")}>rankings</button>

		</div>
	);
}

export default Battle;