import styled from "styled-components";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  cursor: pointer;

  filter: ${({ selected }) => selected && "grayscale(90%)"};
`;

export const PokemonImage = styled.img`
  position: absolute;
  width: 65px;
  height: 65px;
  z-index: 10;
  left: 3px;
  top: 0px;
`;
