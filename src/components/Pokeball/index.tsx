import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PokeballIcon } from "@/assets/icons";
import * as Styles from "./styles";
import { IPokemon } from "@/interfaces/pokemon.interface";
import { pokeTypeColors } from "@/assets/pokeTypesColors";

interface PokeballProps {
  pokemon: IPokemon;
  removePokemonList?: IPokemon[];
  setRemovePokemonList?: Dispatch<SetStateAction<[] | IPokemon[]>>;
}

export function Pokeball({
  pokemon,
  removePokemonList,
  setRemovePokemonList,
}: PokeballProps) {
  const primaryType =
    pokeTypeColors[`${pokemon?.types?.[0].type.name}`] ||
    pokeTypeColors[`${pokemon?.type}`];
  const [selected, setSelected] = useState(false);

  function selectedPokemon(pokemon: IPokemon) {
    if (!removePokemonList || !setRemovePokemonList) return;

    const hasPokemon: IPokemon | undefined = removePokemonList.find(
      (p) => p.id === pokemon.id
    );

    setSelected(!selected);

    if (selected && hasPokemon) {
      setRemovePokemonList((removeList) => {
        return removeList.filter((pokemon) => pokemon.id !== hasPokemon.id);
      });
    }

    if (hasPokemon) return;

    if (!selected) {
      setRemovePokemonList((removeList) => [...removeList, pokemon]);
    }
  }

  useEffect(() => {
    if (!removePokemonList || !setRemovePokemonList) return;

    if (removePokemonList.length === 0) {
      setSelected(false);
    }
  }, [removePokemonList?.length]);

  if (!pokemon) {
    return (
      <Styles.Container>
        <PokeballIcon />
      </Styles.Container>
    );
  }

  return (
    <Styles.Container
      onClick={() => selectedPokemon(pokemon)}
      selected={selected}
    >
      <PokeballIcon type={primaryType} />
      <Styles.PokemonImage src={pokemon.img} alt={pokemon.name} />
    </Styles.Container>
  );
}
