import { PokemonTypes, TagComponent } from "../../atoms";
import * as S from "./styles";

export type ITags = {
  tags: PokemonTypes[];
};

export const Tags = ({ tags }: ITags) => (
  <S.Tags>
    <S.TagTitle>Types</S.TagTitle>
    <S.TagsList>
      {tags.map((tag, index) => (
        <S.TagComponentStyle key={index}>
          <TagComponent type={tag} />
        </S.TagComponentStyle>
      ))}
    </S.TagsList>
  </S.Tags>
);
