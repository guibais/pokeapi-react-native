import {
  DetailsDescription,
  DetailsTitle,
  IDetailsDescription,
  IDetailsTitle,
} from "../../atoms";
import * as S from "./styles";

export type IPokemonDetail = IDetailsTitle & IDetailsDescription;

export const PokemonDetail = ({ title, description }: IPokemonDetail) => {
  return (
    <S.DetailsContainer>
      <DetailsTitle title={title} />
      <DetailsDescription description={description} />
    </S.DetailsContainer>
  );
};
