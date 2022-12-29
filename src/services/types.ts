import { PokemonTypes } from "../../components/atoms";

export type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResult[];
};

export type Pagination = {
  offset: number;
  limit: number;
};

export type Details = {
  id: string | number;
};

export type PokemonListResult = {
  name: string;
  url: string;
};

export type PokemonDetailsResponse = {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  moves: Move[];
  name: string;
  order: number;
  species: NameUrl;
  types: Type[];
  weight: number;
  sprites: Sprites;
};

type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

type Ability = {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
};

type NameUrl = {
  name: PokemonTypes;
  url: string;
};

type Type = {
  slot: number;
  type: NameUrl;
};

type Move = {
  move: NameUrl;
};

export type PokemonSpeciesResponse = {
  egg_groups: NameUrl[];
  id: number;
  name: string;
};
