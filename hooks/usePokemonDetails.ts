import { useQuery, UseQueryOptions } from "../utils/ReactQueryHelper";
import {
  getPokemonDetails,
  getPokemonList,
  POKEMON_LIST_KEY,
} from "../services/endpoints";
import {
  Pagination,
  PokemonDetailsResponse,
  PokemonListResponse,
} from "../services/types";

type UsePokemonDetailsParams = UseQueryOptions<
  PokemonDetailsResponse,
  Error
> & {
  id: string | number;
};

const FALLBACK_DATA: PokemonDetailsResponse = {
  abilities: [],
  base_experience: 0,
  height: 0,
  id: 0,
  is_default: false,
  moves: [],
  name: "",
  order: 0,
  species: { name: "rock", url: "" },
  types: [],
  weight: 0,
  sprites: {
    back_default: "",
    back_female: "",
    back_shiny: "",
    back_shiny_female: "",
    front_default: "",
    front_female: "",
    front_shiny: "",
    front_shiny_female: "",
  },
};

export const usePokemonDetails = ({
  id,
  ...options
}: UsePokemonDetailsParams) => {
  const { data = FALLBACK_DATA } = useQuery<PokemonDetailsResponse, Error>(
    [POKEMON_LIST_KEY, id],
    async () => fetch(getPokemonDetails({ id })).then((res) => res.json()),
    { ...options }
  );

  return { pokemonDetailsData: data };
};
