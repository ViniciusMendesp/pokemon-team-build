import * as Styles from "@/components/Pokemon/styles";
import { pokeTypeColors } from "@/assets/pokeTypesColors";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { IPokemon } from "@/interfaces/pokemon.interface";

interface PokemonProps {
  pokemon: IPokemon;
  setTeamPokemonSelected: Dispatch<SetStateAction<IPokemon[] | []>>;
  teamPokemonSelected: IPokemon[];
}

export function Pokemon({
  pokemon,
  setTeamPokemonSelected,
  teamPokemonSelected,
}: PokemonProps) {
  const [selected, setSelected] = useState(false);

  const primaryType =
    pokeTypeColors[`${pokemon?.type}`] ||
    pokeTypeColors[`${pokemon?.types?.[0]?.type.name}`];
  const secondaryType =
    pokeTypeColors[`${pokemon?.type}`] ||
    pokeTypeColors[`${pokemon?.types?.[1]?.type.name}`];

  function selectedPokemon(pokemon: IPokemon) {
    const hasPokemon = teamPokemonSelected.find((p) => p.id === pokemon.id);
    const isLimitTeam = teamPokemonSelected.length >= 6;

    if (!isLimitTeam) {
      setSelected(true);
    }

    if (hasPokemon || isLimitTeam) return;

    if (!selected) {
      setTeamPokemonSelected((team) => [
        ...team,
        {
          id: pokemon.id,
          img: pokemon.img,
          name: pokemon.name,
          type: pokemon?.types?.[0].type.name || "fire",
        },
      ]);
    }
  }

  useEffect(() => {
    const hasPokemon = teamPokemonSelected.find((p) => p.id === pokemon.id);
    if (!hasPokemon) {
      setSelected(false);
    }
  }, [teamPokemonSelected.length]);

  return (
    <Styles.PokemonContainer onClick={() => selectedPokemon(pokemon)}>
      <Styles.PokemonIdContainer>
        <Styles.PokemonIdCircle>
          <Styles.PokemonId>#{pokemon.id}</Styles.PokemonId>
        </Styles.PokemonIdCircle>
      </Styles.PokemonIdContainer>

      <Styles.PokemonImage src={pokemon.img} alt={pokemon.name} />

      <Styles.PokemonName>{pokemon.name}</Styles.PokemonName>

      <Styles.PokemonTypeContainer>
        <Styles.PokemonType color={primaryType} />
        <Styles.PokemonType color={secondaryType} />
      </Styles.PokemonTypeContainer>

      {selected && (
        <Styles.DoneCircle>
          <Styles.Done />
        </Styles.DoneCircle>
      )}
    </Styles.PokemonContainer>
  );
}
