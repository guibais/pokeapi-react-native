import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { IHighlighted } from "../../components/atoms/Highlighted";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import { useFavoriteFilter } from "../../store/useFavoriteFilter";
import { RootStackParamList } from "../../types";

export type PokeScreenProps = NativeStackScreenProps<RootStackParamList>;

export const useLogic = ({ route }: PokeScreenProps) => {
  const { params } = route as RouteProp<RootStackParamList, "Pokemon">;

  const queryOptionsPokemonDetails = {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 min
    refetchOnMount: false,
  };

  const { pokemonDetailsData } = usePokemonDetails({
    id: params.id,
    ...queryOptionsPokemonDetails,
  });

  const queryOptionsPokemonSpecies = {
    enabled: !!pokemonDetailsData.id && pokemonDetailsData.id > 0,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 min
    refetchOnMount: false,
  };

  const { pokemonSpeciesData } = usePokemonSpecies({
    id: pokemonDetailsData.id,
    ...queryOptionsPokemonSpecies,
  });

  const [favorites, setFavorite, removeFavorite] = useFavoriteFilter(
    (state) => [state.favorites, state.setFavorite, state.removeFavorite]
  );

  const pokemonTitle = React.useMemo(
    () => ({
      name: pokemonDetailsData.name,
      id: `#${pokemonDetailsData.id}`,
      status: (favorites.filter(
        (fav) => fav.id === pokemonDetailsData.id.toString()
      ).length > 0
        ? "favorited"
        : "not-favorited") as "favorited" | "not-favorited",
      onPress: () => {
        if (
          favorites.filter((fav) => fav.id === pokemonDetailsData.id.toString())
            .length > 0
        ) {
          removeFavorite(pokemonDetailsData.id.toString());
        } else {
          setFavorite({
            id: pokemonDetailsData.id.toString(),
            name: pokemonDetailsData.name,
          });
        }
      },
    }),
    [pokemonDetailsData.name, pokemonDetailsData.id, favorites]
  );

  const tags = React.useMemo(() => {
    return pokemonDetailsData.types.map((type) => type.type.name);
  }, [pokemonDetailsData.types]);

  const higthlightedData: IHighlighted[] = React.useMemo(() => {
    return [
      { title: "Height", number: pokemonDetailsData.height, color: "blue" },
      { title: "Weight", number: pokemonDetailsData.weight, color: "orange" },
      {
        title: "Base Exp",
        number: pokemonDetailsData.base_experience,
        color: "blue",
      },
      {
        title: "Moves",
        number: pokemonDetailsData.moves.length,
        color: "orange",
      },
    ];
  }, [
    pokemonDetailsData.height,
    pokemonDetailsData.weight,
    pokemonDetailsData.base_experience,
    pokemonDetailsData.moves.length,
  ]);

  const abilities = React.useMemo(() => {
    return pokemonDetailsData.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
  }, [pokemonDetailsData.abilities]);

  const moves = React.useMemo(() => {
    return pokemonDetailsData.moves.map((move) => move.move.name).join(", ");
  }, [pokemonDetailsData.moves]);

  const species = React.useMemo(() => {
    return pokemonSpeciesData.egg_groups.map((egg) => egg.name).join(", ");
  }, [pokemonSpeciesData]);

  return {
    pokemonDetailsData,
    pokemonSpeciesData,
    pokemonTitle,
    tags,
    higthlightedData,
    abilities,
    moves,
    species,
  };
};
