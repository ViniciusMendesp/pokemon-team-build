import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Pokemon } from "@/components/Pokemon";
import * as Styles from "@/styles/pages/index.styles";
import axios from "axios";
import { IPokemon } from "@/interfaces/pokemon.interface";
import { Pokeball } from "@/components/Pokeball";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([]);
  const [edit, setEdit] = useState(false);
  const [myTeam, setMyTeam] = useState("My Team");
  const [teamPokemonSelected, setTeamPokemonSelected] = useState<
    IPokemon[] | []
  >([]);
  const [removePokemonList, setRemovePokemonList] = useState<IPokemon[] | []>(
    []
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [
    slotPokeball1,
    slotPokeball2,
    slotPokeball3,
    slotPokeball4,
    slotPokeball5,
    slotPokeball6,
  ] = teamPokemonSelected;

  async function getPokemons() {
    const { data } = await axios.get("/api/pokemons");
    setPokemons(data);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  function removeItems() {
    if (removePokemonList.length === 0) return;

    removePokemonList.map((pokemonToRemove) => {
      setTeamPokemonSelected((team) => {
        return team.filter((pokemon) => pokemon.id !== pokemonToRemove.id);
      });
    });
    setRemovePokemonList([]);
  }

  async function addTeam() {
    const body = {
      name: myTeam,
      pokemons: teamPokemonSelected.map((pokemon) => ({
        name: pokemon.name,
        type: pokemon.type,
        img: pokemon.img,
      })),
    };

    setIsButtonDisabled(true);
    await axios.post("/api/createTeam", body);
    toast.success("Equipe criada com sucesso!");

    setTimeout(() => {
      window.location.href = "/listTeam";
    }, 2000);
  }

  useEffect(() => {
    setIsButtonDisabled(teamPokemonSelected.length < 6);
  }, [teamPokemonSelected]);

  return (
    <Styles.Container>
      <Header href="/listTeam" title="teams" />
      <Styles.Content>
        <Styles.ChoiceContainer>
          <Styles.TitleContainer>
            {edit ? (
              <Styles.Input
                value={myTeam}
                onChange={(e) => setMyTeam(e.target.value)}
              />
            ) : (
              <Styles.Title>{myTeam}</Styles.Title>
            )}

            <Styles.Edit onClick={() => setEdit(!edit)} />
          </Styles.TitleContainer>

          <Styles.ChoiceContent>
            <Styles.RowOne>
              <Pokeball
                pokemon={slotPokeball1}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
              <Pokeball
                pokemon={slotPokeball2}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
              <Pokeball
                pokemon={slotPokeball3}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
            </Styles.RowOne>
            <Styles.RowTwo>
              <Pokeball
                pokemon={slotPokeball4}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
              <Pokeball
                pokemon={slotPokeball5}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
              <Pokeball
                pokemon={slotPokeball6}
                removePokemonList={removePokemonList}
                setRemovePokemonList={setRemovePokemonList}
              />
            </Styles.RowTwo>
          </Styles.ChoiceContent>

          <Styles.IconsContainer>
            <Styles.TrashCircle onClick={removeItems}>
              <Styles.Trash />
            </Styles.TrashCircle>
            <ToastContainer />
            {isButtonDisabled ? (
              <Styles.DoneCircle disabled={true}>
                <Styles.Done />
              </Styles.DoneCircle>
            ) : (
              <Styles.DoneCircle onClick={addTeam}>
                <Styles.Done />
              </Styles.DoneCircle>
            )}
          </Styles.IconsContainer>
        </Styles.ChoiceContainer>

        <Styles.ListPokemonsContainer>
          <Styles.Title>Choose 6 pokemons:</Styles.Title>

          <Styles.ListPokemonContent>
            {pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                setTeamPokemonSelected={setTeamPokemonSelected}
                teamPokemonSelected={teamPokemonSelected}
              />
            ))}
          </Styles.ListPokemonContent>
        </Styles.ListPokemonsContainer>
      </Styles.Content>
    </Styles.Container>
  );
}
