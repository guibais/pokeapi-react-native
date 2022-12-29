import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as S from "./styles";

export type IShowFavorite = {
  showFavoriteStatus: "favorited" | "not-favorited";
  showFavoriteOnPress?: () => void | undefined;
  showFavoriteTitle: string;
};

export const ShowFavorite = ({
  showFavoriteTitle,
  showFavoriteStatus,
  showFavoriteOnPress,
}: IShowFavorite) => (
  <S.ShowFavorite
    testID={
      showFavoriteStatus === "favorited"
        ? "favorited-icon"
        : "not-favorited-icon"
    }
    onPress={showFavoriteOnPress}
  >
    {showFavoriteStatus === "favorited" ? (
      <MaterialCommunityIcons name="pokeball" size={24} color="red" />
    ) : (
      <MaterialCommunityIcons name="pokeball" size={24} color="lightgray" />
    )}
    <S.FavoriteText isFavorite={showFavoriteStatus === "favorited"}>
      {showFavoriteTitle}
    </S.FavoriteText>
  </S.ShowFavorite>
);
