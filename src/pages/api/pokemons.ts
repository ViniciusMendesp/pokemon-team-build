// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Pokedex from "pokedex-promise-v2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const api = new Pokedex();
    const data = await api.getPokemonsList({ limit: 30 });

    const { results } = data;

    const arrPokemons = results.map((pokemon) => {
      const pokemonID = pokemon.url.split("/")[6];

      return {
        id: Number(pokemonID),
        name: pokemon.name,
      };
    });

    const pokemons = await Promise.all(
      arrPokemons.map(async (pokemon) => {
        const data = await api.getPokemonByName(pokemon.id);
        const { types, sprites } = data;

        return {
          id: pokemon.id,
          name: pokemon.name,
          types: types,
          img: sprites.other.dream_world.front_default,
        };
      })
    );

    res.status(200).json(pokemons);
  } catch (error) {
    throw new Error("Error List");
  }
}
