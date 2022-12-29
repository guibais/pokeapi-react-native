import { Favorite, IFavorite } from "../../atoms/Favorite";
import * as S from "./styles";
export type IPokemonTitle = IFavorite & {
  name: string;
  id: string;
};

export const PokemonTitle = ({ name, id, status, onPress }: IPokemonTitle) => (
  <S.TitleContainer>
    <Favorite {...{ status, onPress }} />
    <S.TitleContainerName>{name}</S.TitleContainerName>
    <S.TitleContainerId>{id}</S.TitleContainerId>
  </S.TitleContainer>
);
