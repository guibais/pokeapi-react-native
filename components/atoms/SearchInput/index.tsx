import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
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
  const inputRef = React.useRef<TextInput>(null);

  return (
    <S.InputContainer>
      <S.Input {...{ ...props, testID: "search-input", ref: inputRef }} />
      {props.showClearButton ? (
        <S.ClearButton
          testID="clear-button"
          onPress={() => {
            inputRef.current && inputRef.current.clear();
            props.onClearField && props.onClearField();
          }}
        >
          <AntDesign name="close" size={20} color="lightslategrey" />
        </S.ClearButton>
      ) : (
        <></>
      )}
    </S.InputContainer>
  );
};
