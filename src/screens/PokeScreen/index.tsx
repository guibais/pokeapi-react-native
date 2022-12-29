import Display from "~/assets/images/display.png";
import { PokeScreenProps, useLogic } from "./useLogic";
import { PokemonDetailsTemplate } from "~/components/templates";
import React from "react";
import { useTranslation } from "react-i18next";
export const PokeScreen = ({ ...props }: PokeScreenProps) => {
  const {
    pokemonDetailsData,
    pokemonTitle,
    tags,
    higthlightedData,
    abilities,
    moves,
    species,
  } = useLogic({ ...props });

  return (
    <PokemonDetailsTemplate
      image={pokemonDetailsData.sprites.front_default}
      display={Display}
      pokemonTitle={pokemonTitle}
      tags={tags}
      highlightes={higthlightedData}
      abilities={abilities}
      species={species}
      moves={moves}
    />
  );
};
