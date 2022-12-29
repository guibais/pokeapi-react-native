import { Details, Pagination } from "./types";

const defaultUrl = "https://pokeapi.co/api/v2";

export const POKEMON_LIST_KEY = "pokemonList";
export const POKEMON_LIST_SEARCH_KEY = "pokemonListSearch";
export const POKEMON_DETAILS_KEY = "pokemonDetails";
export const POKEMON_SPECIES_KEY = "pokemonSpecies";

export const getPokemonList = ({ offset, limit }: Pagination) =>
  `${defaultUrl}/pokemon?offset=${offset}&limit=${limit}`;

export const getPokemonDetails = ({ id }: Details) =>
  `${defaultUrl}/pokemon/${id}`;

export const getPokemonSpecies = ({ id }: Details) =>
  `${defaultUrl}/pokemon-species/${id}`;
