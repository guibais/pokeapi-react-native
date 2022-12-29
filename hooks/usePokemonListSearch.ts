import { useQuery, UseQueryOptions } from "../utils/ReactQueryHelper";
import { getPokemonList, POKEMON_LIST_SEARCH_KEY } from "../services/endpoints";
import { PokemonListResponse } from "../services/types";

type UsePokemonListParams = UseQueryOptions<PokemonListResponse, Error> & {
  name: string;
};

const FALLBACK_DATA: PokemonListResponse = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

export const usePokemonListSearch = ({ ...options }: UsePokemonListParams) => {
  const { data = FALLBACK_DATA, isFetching } = useQuery<
    PokemonListResponse,
    Error
  >(
    [POKEMON_LIST_SEARCH_KEY, options.name],
    async () =>
      fetch(getPokemonList({ offset: 0, limit: 1500 })).then((res) =>
        res.json()
      ),
    { ...options }
  );

  return {
    pokemonListSearchData: {
      ...data,
      results: data.results.filter((res) =>
        res.name.toLocaleLowerCase().includes(options.name.toLocaleLowerCase())
      ),
    },
    isFetching,
  };
};
