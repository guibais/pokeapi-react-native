import * as S from "./styles";

export type IBasicTitle = {
  title: string;
};

export const BasicTitle = ({ title }: IBasicTitle) => (
  <S.Title>{title}</S.Title>
);
