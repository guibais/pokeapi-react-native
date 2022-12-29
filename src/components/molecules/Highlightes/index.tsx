import { Highlighted, IHighlighted } from "../../atoms/Highlighted";
import * as S from "./styles";

export type IHighlightes = {
  items: IHighlighted[];
};

export const Highlightes = ({ items }: IHighlightes) => {
  return (
    <S.HighlightesContainer>
      {items.map((item, index) => (
        <Highlighted key={index} {...item} />
      ))}
    </S.HighlightesContainer>
  );
};
