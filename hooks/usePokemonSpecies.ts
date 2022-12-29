import { useQuery, UseQueryOptions } from "../utils/ReactQueryHelper";
import {
  getPokemonSpecies,
  POKEMON_LIST_KEY,
  POKEMON_SPECIES_KEY,
} from "../services/endpoints";
import { PokemonSpeciesResponse } from "../services/types";

type UsePokemonSpeciesParams = UseQueryOptions<
  PokemonSpeciesResponse,
  Error
> & {
  id: string | number;
};

const FALLBACK_DATA: PokemonSpeciesResponse = {
  id: 0,
  name: "",
  egg_groups: [],
};

export const usePokemonSpecies = ({
  id,
  ...options
}: UsePokemonSpeciesParams) => {
  const { data = FALLBACK_DATA } = useQuery<PokemonSpeciesResponse, Error>(
    [POKEMON_SPECIES_KEY, id],
    async () => fetch(getPokemonSpecies({ id })).then((res) => res.json()),
    { ...options }
  );

  return { pokemonSpeciesData: data };
};
