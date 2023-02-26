import { useState, useEffect } from "react";
import * as Styles from "@/styles/pages/index.styles";
import { Header } from "@/components/Header";
import { Pokeball } from "@/components/Pokeball";
import { Teams } from "@/interfaces/pokemon.interface";
import axios from "axios";

export default function Home() {
  const [teams, setTeams] = useState<Teams[] | []>([]);

  async function getPokemons() {
    const { data } = await axios.get("/api/listTeams");
    setTeams(data);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Styles.Container>
      <Header href="/" title="teams" />

      {teams.length !== 0 &&
        teams.map((team) => (
          <Styles.Content key={team.id}>
            <Styles.TitleContainer>
              <Styles.Title>{team.name}</Styles.Title>
            </Styles.TitleContainer>

            <Styles.ChoiceContent>
              {team.pokemons.map((pokemon) => (
                <Pokeball key={pokemon.id} pokemon={pokemon} />
              ))}
            </Styles.ChoiceContent>

            <Styles.DividerContainer>
              <Styles.DividerBlue />
            </Styles.DividerContainer>
          </Styles.Content>
        ))}
    </Styles.Container>
  );
}
