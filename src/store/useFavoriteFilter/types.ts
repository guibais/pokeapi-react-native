export type Favorite = {
  name: string;
  id: string;
};

export type FavoriteFilterType = {
  favorites: Favorite[];
  setFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: string) => void;
};
