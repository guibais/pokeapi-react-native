import * as S from "./styles";

export type IDetailsTitle = {
  title: string;
};

export const DetailsTitle = ({ title }: IDetailsTitle) => (
  <S.DetailsTitle>{title}</S.DetailsTitle>
);
