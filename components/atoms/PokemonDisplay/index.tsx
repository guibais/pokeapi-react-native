import { ImageSourcePropType } from "react-native";
import * as S from "./styles";

export type IPokemonDisplay = {
  image: ImageSourcePropType;
};

export const PokemonDisplay = ({ image }: IPokemonDisplay) => (
  <S.PokemonDisplay testID="pokemon-display" source={image} />
);
