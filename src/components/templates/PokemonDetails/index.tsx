import { ImageSourcePropType, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import {
  ImageContainer,
  PokemonDisplay,
  PokemonImage,
  PokemonTypes,
} from "../../atoms";
import { IHighlighted } from "../../atoms/Highlighted";
import {
  Highlightes,
  IPokemonTitle,
  PokemonDetail,
  PokemonTitle,
  Tags,
} from "../../molecules";
import * as S from "./styles";

export type IPokemonDetails = {
  image: string;
  display: ImageSourcePropType;
  pokemonTitle: IPokemonTitle;
  tags: PokemonTypes[];
  highlightes: IHighlighted[];
  abilities: string;
  species: string;
  moves: string;
};

export const PokemonDetailsTemplate = ({
  image,
  display,
  pokemonTitle,
  tags,
  highlightes,
  abilities,
  species,
  moves,
}: IPokemonDetails) => {
  const { t } = useTranslation();
  return (
    <>
      {image && (
        <S.Page contentContainerStyle={{ flexGrow: 1 }}>
          <ImageContainer image={image} />
          <S.Container>
            <PokemonDisplay image={display} />
            <PokemonImage image={image} />
            <PokemonTitle {...pokemonTitle} />
            <Tags tags={tags} />
            <Highlightes items={highlightes} />
            <PokemonDetail
              title={t("pokeScreen.abilities")}
              description={abilities}
            />
            <PokemonDetail
              title={t("pokeScreen.species")}
              description={species}
            />
            <PokemonDetail title={t("pokeScreen.moves")} description={moves} />
          </S.Container>
        </S.Page>
      )}
    </>
  );
};
