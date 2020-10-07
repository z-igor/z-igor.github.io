import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_NAME } from "../../graphql/get-pokemon-by-name";

export function Pokemon({ name, ...props }) {
  const { data: { pokemon = [] } = {}, loading, error } = useQuery(
    GET_POKEMON_BY_NAME,
    {
      variables: {
        name,
      },
    }
  );

  if (loading) return <p>Loading-preloading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="pokemon-box">
      <p className="pokemon__text pokemon__name">{pokemon.name}</p>
      <div className="pokemon__meta">
        <p className="pokemon__text pokemon__meta-item">
          height: {pokemon.height}
        </p>
        <p className="pokemon__text pokemon__meta-item">
          weight: {pokemon.weight}
        </p>
        <div className="pokemon__meta-item pokemon__forms">
          {pokemon.forms &&
            pokemon.forms.map((a, i) => (
              <span className="pokemon__form" key={a + i}>
                form: {a.name}
              </span>
            ))}
        </div>
      </div>
      <div className="pokemon__image">
        <img
          className="pokemon__image-item"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <img
          className="pokemon__image-item"
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
        />
        <img
          className="pokemon__image-item"
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
        />
        <img
          className="pokemon__image-item"
          src={pokemon.sprites.back_shiny}
          alt={pokemon.name}
        />
      </div>
      <div className="pokemon__abilities">
        {pokemon.abilities &&
          pokemon.abilities.map((a, i) => (
            <div className="pokemon__ability" key={a + i}>
              <span className="pokemon__ability-item">slot {a.slot}</span>
              <span className="pokemon__ability-item">{a.ability.name}</span>
            </div>
          ))}
      </div>
      <div className="pokemon__stats">
        <p className="pokemon__text pokemon__stats-title">Stats</p>
        {pokemon.stats &&
          pokemon.stats.map((s, i) => (
            <div className="pokemon__stat-box" key={s + i}>
              <span
                className="pokemon__stat pokemon__stat-title"
                title="Stat name"
              >
                {s.stat.name}
              </span>
              <span className="pokemon__stat" title="Base stat">
                {s.base_stat}
              </span>
              <span className="pokemon__stat" title="Effort">
                {s.effort}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
