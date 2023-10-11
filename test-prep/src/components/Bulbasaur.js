import React from "react";
import { pokemonApi, useGetPokemonByNameQuery, useGetPokemonsQuery } from "../redux/pokemon";
import { useDispatch } from "react-redux";

const Bulbasaur = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('snorlax');
    const { data:pokemons, isLoading:loadingPokemons} = useGetPokemonsQuery();

    return(
        <>
        {isLoading ? <h1>Loading</h1> : data ? <h1>{data.species.name}</h1> : null}
        {pokemons ? <ul>{pokemons.results.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}</ul> : null}
        </>
    )
}

export default Bulbasaur