const PokeCard = ({pokeInfo}) => {
    return(
        <div className="PokeCard">
            <h1>{pokeInfo.name}</h1>
            <p>HP: {pokeInfo.stats[0].base_stat}</p>
            <p>Attack: {pokeInfo.stats[1].base_stat}</p>
            <p>Defense: {pokeInfo.stats[2].base_stat}</p>
        </div>
    )
}

export default PokeCard