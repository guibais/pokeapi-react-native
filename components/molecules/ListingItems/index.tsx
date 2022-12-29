import { Entypo } from "@expo/vector-icons";
import { IListingHeader, ListingHeader } from "../../atoms/ListingHeader";
import * as S from "./styles";

export type IListingItems = IListingHeader & {
  onItemPressed?: (item: ListingItemType) => void;
  data: readonly any[] | null | undefined;
  headerTitle: string;
  keyExtractor?: ((item: any, index: number) => string) | undefined;
  onEndReached?: () => void | undefined;
  onEndReachedThreshold?: number | undefined;
};

export type ListingItemType = {
  name: string;
};

type RenderItemType = {
  item: { name: string };
};

export const ListingItems = ({
  onItemPressed,
  data,
  keyExtractor,
  onEndReached,
  onEndReachedThreshold,
  headerTitle,
  showFavoriteStatus,
  showFavoriteTitle,
  showFavoriteOnPress,
}: IListingItems) => {
  const renderItem = ({ item }: RenderItemType) => (
    <S.ListingItem
      key={item.name}
      onPress={() => onItemPressed && onItemPressed(item)}
    >
      <S.ListingItemText>{item.name}</S.ListingItemText>
      <Entypo name="chevron-small-right" size={20} />
    </S.ListingItem>
  );

  return (
    <S.Listing
      data={data}
      ListHeaderComponent={
        <ListingHeader
          {...{
            headerTitle,
            showFavoriteStatus,
            showFavoriteTitle,
            showFavoriteOnPress,
          }}
        />
      }
      renderItem={(item) => renderItem(item as unknown as RenderItemType)}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <S.ListingSeparator />}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
    />
  );
};
