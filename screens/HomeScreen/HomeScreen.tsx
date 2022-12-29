import { HomeTemplate } from "../../components/templates";
import { HomeScreenProps, useLogic } from "./useLogic";
import { useTranslation } from "react-i18next";

export const HomeScreen = ({ ...props }: HomeScreenProps) => {
  const { t } = useTranslation();

  const {
    refetchPokemonData,
    goToPokeScreen,
    onlyFavoritesText,
    toggleShowOnlyFavorites,
    currentPokemonListData,
    onSearchSubmit,
    onInputFocus,
    onClearField,
    onChangeText,
    innerSearchValue,
  } = useLogic({
    ...props,
  });

  return (
    <HomeTemplate
      data={currentPokemonListData}
      headerTitle={t("homeScreen.headerTitle")}
      keyExtractor={(item: any) => item.name}
      onEndReached={refetchPokemonData}
      onEndReachedThreshold={0.5}
      onItemPressed={goToPokeScreen}
      showFavoriteStatus={onlyFavoritesText}
      showFavoriteTitle={t("homeScreen.showOnlyCaptured")}
      showFavoriteOnPress={toggleShowOnlyFavorites}
      basicTitle={{
        title: t("homeScreen.basicTitle"),
      }}
      searchInput={{
        placeholder: t("homeScreen.typeToSearch"),
        placeholderTextColor: "#6f6e6e",
        onFocus: onInputFocus,
        onClearField: onClearField,
        onChangeText: onChangeText,
        showClearButton: innerSearchValue.length > 0,
      }}
      onInputSubmit={onSearchSubmit}
    />
  );
};
