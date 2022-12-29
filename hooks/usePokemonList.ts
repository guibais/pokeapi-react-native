import { useQuery, UseQueryOptions } from "../utils/ReactQueryHelper";
import { getPokemonList, POKEMON_LIST_KEY } from "../services/endpoints";
import { Pagination, PokemonListResponse } from "../services/types";

type UsePokemonListParams = UseQueryOptions<PokemonListResponse, Error> & {
  filters: Pagination;
};

const FALLBACK_DATA: PokemonListResponse = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

export const usePokemonList = ({
  filters,
  ...options
}: UsePokemonListParams) => {
  const { data = FALLBACK_DATA, isFetching } = useQuery<
    PokemonListResponse,
    Error
  >(
    [POKEMON_LIST_KEY, filters.offset],
    async () => fetch(getPokemonList(filters)).then((res) => res.json()),
    { ...options }
  );

  return { pokemonListData: data, isFetching };
};
