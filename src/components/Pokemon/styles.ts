import { MdDone } from "react-icons/md";
import styled from "styled-components";

export const PokemonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const PokemonIdContainer = styled.div`
  display: flex;
  align-items: start;
`;

export const PokemonIdCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  position: absolute;
  top: -15px;
  left: -20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--light-blue);
`;

export const PokemonId = styled.span`
  font-size: 12px;
  color: var(--white);

  display: flex;
  align-items: flex-start;
`;

export const PokemonImage = styled.img`
  width: 45px;
  height: 45px;
`;

export const PokemonName = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 10px;
  font-weight: 700;

  color: var(--dark-blue);
`;

export const PokemonTypeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;

export const PokemonType = styled.div`
  width: 50%;
  height: 2px;

  background-color: ${({ color }) => color};
`;

export const DoneCircle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;

  background-color: var(--green);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 28px;
  opacity: 0.9;

  color: var(--white);

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Done = styled(MdDone)`
  width: 20px;
  height: 20px;
`;
