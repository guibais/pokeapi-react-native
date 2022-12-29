import * as S from "./styles";

export type PokemonTypes =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type ITagComponent = {
  type: PokemonTypes;
};

export const TagComponent = ({ type }: ITagComponent) => {
  return (
    <S.TagComponent type={type}>
      <S.TagText>{type}</S.TagText>
    </S.TagComponent>
  );
};
