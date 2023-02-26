export interface IPokemon {
  id?: number;
  name: string;
  type: string;
  types?: TypeElement[] | undefined;
  img: string;
}

export interface TypeElement {
  slot: number;
  type: TypeType;
}

export interface TypeType {
  name: string;
  url: string;
}

export interface Teams {
  id: string;
  name: string;
  pokemons: IPokemon[];
}
