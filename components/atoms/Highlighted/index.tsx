import * as S from "./styles";

export type IHighlighted = {
  title: string;
  number: number | string;
  color: "blue" | "orange" | undefined;
};

export const Highlighted = ({ title, color, number }: IHighlighted) => (
  <S.Highlighted>
    <S.HighlightedCircular
      testID="highlighted-circular"
      backgroundColor={color}
    >
      <S.HighlightedNumber>{number}</S.HighlightedNumber>
      <S.HighlightedText>{title}</S.HighlightedText>
    </S.HighlightedCircular>
  </S.Highlighted>
);
