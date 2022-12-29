import * as S from "./styles";

export type IDetailsDescription = {
  description: string;
};

export const DetailsDescription = ({ description }: IDetailsDescription) => (
  <S.DetailsDescription>{description}</S.DetailsDescription>
);
