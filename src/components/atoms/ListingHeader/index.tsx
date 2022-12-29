import { IShowFavorite, ShowFavorite } from "..";

import * as S from "./styles";

export type IListingHeader = IShowFavorite & {
  headerTitle: string;
};

export const ListingHeader = ({
  headerTitle,
  showFavoriteTitle,
  showFavoriteStatus,
  showFavoriteOnPress,
}: IListingHeader) => (
  <S.ListingHeader>
    <S.ListingHeaderTitle>{headerTitle}</S.ListingHeaderTitle>
    <ShowFavorite
      {...{ showFavoriteTitle, showFavoriteStatus, showFavoriteOnPress }}
    />
  </S.ListingHeader>
);
