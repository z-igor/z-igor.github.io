import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/get-pokemons";
import { Pokemon } from "../../components/Pokemon/Pokemon";

export function PokemonContainer({...props}) {
  const { data: { pokemons = [] } = {}, loading, error } = useQuery(
    GET_POKEMONS,
    {
      variables: {
        limit: props.show,
        offset: 4,
      },
    }
  );

  if (loading) return <p>Loading-preloading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="container">
      {pokemons.results.map((pokemon) => (
        <Pokemon key={pokemon.id} name={pokemon.name} />
      ))}
    </div>
  );
}