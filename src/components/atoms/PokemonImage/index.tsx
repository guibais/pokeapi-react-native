import * as S from "./styles";

export type IPokemonImage = {
  image: string;
};

export const PokemonImage = ({ image }: IPokemonImage) => (
  <S.Image
    testID="pokemon-image"
    source={{
      uri: image,
    }}
  />
);
