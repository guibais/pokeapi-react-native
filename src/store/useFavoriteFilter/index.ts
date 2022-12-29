import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Favorite, FavoriteFilterType } from "./types";

export const useFavoriteFilter = create(
  devtools(
    persist<FavoriteFilterType>(
      (set) => ({
        favorites: [],
        setFavorite: (favorite: Favorite) =>
          set((state) => {
            if (state.favorites.find((fav) => fav.id === favorite.id)) {
              return {
                favorites: state.favorites.filter(
                  (fav) => fav.id !== favorite.id
                ),
              };
            }
            return {
              favorites: [...state.favorites, favorite],
            };
          }),
        removeFavorite: (id: string) =>
          set((state) => {
            return {
              favorites: state.favorites.filter((fav) => fav.id !== id),
            };
          }),
      }),
      {
        name: "favorite-filter",
        getStorage: () => AsyncStorage,
      }
    )
  )
);
