import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Favorite = {
  name: string;
  id: string;
};

type FavoriteFilterType = {
  favorites: Favorite[];
  setFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: string) => void;
};

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
