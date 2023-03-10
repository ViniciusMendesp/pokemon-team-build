import styled from "styled-components";
import { MdModeEditOutline, MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--gray);
`;

export const Content = styled.div`
  padding: 10px 20px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 16px;

  align-items: center;
`;

export const Title = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-size: 13px;
  color: var(--dark-blue);
  font-weight: 800;
`;

export const Edit = styled(MdModeEditOutline)`
  width: 15px;
  height: 15px;

  cursor: pointer;

  color: var(--dark-blue);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChoiceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  gap: 40px;

  margin-bottom: 24px;

  @media (min-width: 550px) {
    display: flex;
    margin-left: 43vw;
  }
`;

export const RowOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 31px;
  margin-left: -66px;
`;

export const RowTwo = styled.div`
  display: flex;
  gap: 31px;
  flex-wrap: wrap;
  margin-left: 38px;
`;

export const IconsContainer = styled.div`
  width: 100%;

  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;

  margin-bottom: 23px;
`;

export const TrashCircle = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--red);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const DoneCircle = styled.button`
  all: unset;

  width: 40px;
  height: 40px;

  background-color: var(--green);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Trash = styled(FaTrash)`
  width: 15px;
  height: 15px;

  path {
    fill: var(--white);
  }
`;

export const Done = styled(MdDone)`
  width: 20px;
  height: 20px;
`;

export const ListPokemonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  margin-top: 40px;
`;

export const ListPokemonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7vw;
  flex-wrap: wrap;

  max-height: 27.5vh;
  overflow: auto;

  padding: 20px;
`;

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerBlue = styled.div`
  background: var(--dark-blue);
  height: 0.063rem;
  width: 84.6%;
`;

export const Input = styled.input``;
