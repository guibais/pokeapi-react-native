import { AntDesign } from "@expo/vector-icons";
import React from "react";
import * as S from "./styles";

export type ISearchInput = {
  placeholder: string;
  placeholderTextColor: string;
  onFocus?: () => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClearField?: () => void;
  onChangeText?: ((text: string) => void) | undefined;
  showClearButton?: boolean;
};

export const SearchInput = (props: ISearchInput) => {
  return (
    <S.InputContainer>
      <S.Input {...{ props, testID: "search-input" }} />
      {props.showClearButton ? (
        <S.ClearButton testID="clear-button" onPress={props.onClearField}>
          <AntDesign name="close" size={20} color="lightslategrey" />
        </S.ClearButton>
      ) : (
        <></>
      )}
    </S.InputContainer>
  );
};
