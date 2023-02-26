import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  position: sticky;

  padding: 0.063rem;
  height: 17vh;
  width: 100%;
  background: var(--light-blue);

  & h1 {
    font-family: "Spartan", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 800;
    line-height: 3rem;
    text-align: center;
    text-transform: uppercase;

    transition: 0.5s;

    cursor: pointer;

    color: var(--white);

    &:hover {
      color: var(--dark-blue);
    }
  }
`;

export const Divider = styled.div`
  background: var(--white);
  height: 0.063rem;
  width: 84.6%;
`;
