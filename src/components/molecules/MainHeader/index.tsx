import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicTitle, IBasicTitle } from "../../atoms";
import { ISearchInput, SearchInput } from "../../atoms/SearchInput";
import * as S from "./styles";

export type IMainHeader = {
  basicTitle: IBasicTitle;
  searchInput: ISearchInput;
  onInputSubmit?: () => void;
};

export const MainHeader = ({
  basicTitle,
  searchInput,
  onInputSubmit,
}: IMainHeader) => {
  return (
    <S.SafeArea>
      <S.HeaderContainer>
        <BasicTitle {...basicTitle} />
        <S.BottomSection>
          <S.HeaderInputContainer>
            <SearchInput {...searchInput} />
          </S.HeaderInputContainer>
          <S.SearchButton onPress={onInputSubmit}>
            <Ionicons name="ios-search" size={24} color="lightyellow" />
          </S.SearchButton>
        </S.BottomSection>
        <S.PokeLine />
      </S.HeaderContainer>
    </S.SafeArea>
  );
};
