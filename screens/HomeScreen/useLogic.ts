import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ListingItemType } from "../../components/molecules";
import { usePokemonListSearch } from "../../hooks/usePokemonListSearch";
import { usePokemonList } from "../../services";
import { PokemonListResult } from "../../services/types";
import { useFavoriteFilter } from "../../store/useFavoriteFilter";
import { RootStackParamList } from "../../types";

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

export const useLogic = ({ navigation }: HomeScreenProps) => {
  const limit = 20;
  const [offset, setOffset] = React.useState(0);
  const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);
  const [results, setResults] = React.useState<PokemonListResult[]>([]);
  const [searchValue, setSearchVale] = React.useState("");
  const [innerSearchValue, setInnerSearchVale] = React.useState("");

  const queryOptionsPokemonList = {
    enabled: !showOnlyFavorites && searchValue.length <= 3,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    refetchOnMount: false,
  };

  const { pokemonListData, isFetching } = usePokemonList({
    filters: { offset, limit },
    ...queryOptionsPokemonList,
  });

  const queryOptionsPokemonListSearch = {
    enabled: searchValue !== "" && searchValue.length > 3,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    refetchOnMount: false,
  };

  const { pokemonListSearchData } = usePokemonListSearch({
    name: searchValue,
    ...queryOptionsPokemonListSearch,
  });

  React.useEffect(() => {
    setResults([...results, ...pokemonListData.results]);
  }, [pokemonListData.results]);

  const refetchPokemonData = () => {
    !isFetching && setOffset(offset + 20);
  };

  const goToPokeScreen = (item: ListingItemType) => {
    navigation.navigate("Pokemon" as any, { id: item.name });
  };

  const [favorites] = useFavoriteFilter((state) => [state.favorites]);

  const toggleShowOnlyFavorites = () => {
    setSearchVale("");
    setShowOnlyFavorites(!showOnlyFavorites);
  };

  const onlyFavoritesText: "favorited" | "not-favorited" = React.useMemo(() => {
    return showOnlyFavorites ? "favorited" : "not-favorited";
  }, [showOnlyFavorites]);

  const currentPokemonListData = React.useMemo(() => {
    if (searchValue !== "" && searchValue.length > 3) {
      return pokemonListSearchData.results;
    }
    return showOnlyFavorites ? favorites : results;
  }, [
    showOnlyFavorites,
    results,
    favorites,
    searchValue,
    pokemonListSearchData.results,
  ]);

  const onInputFocus = () => {
    setShowOnlyFavorites(false);
  };

  const onClearField = () => {
    setInnerSearchVale("");
    setSearchVale("");
  };

  const onChangeText = (value: string) => {
    setInnerSearchVale(value.replaceAll(" ", ""));
  };

  const onSearchSubmit = () => {
    setSearchVale(innerSearchValue);
  };

  return {
    refetchPokemonData,
    goToPokeScreen,
    toggleShowOnlyFavorites,
    onlyFavoritesText,
    currentPokemonListData,
    onSearchSubmit,
    onInputFocus,
    onClearField,
    onChangeText,
    innerSearchValue,
  };
};
