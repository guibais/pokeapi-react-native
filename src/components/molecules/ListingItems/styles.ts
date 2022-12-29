import { styled } from "stitches-native";

export const Listing = styled("FlatList", {
  padding: 20,
  backgroundColor: "#fff",
  zIndex: -1,
});

export const ListingItem = styled("TouchableOpacity", {
  backgroundColor: "#f1f1f1",
  padding: 10,
  borderRadius: 10,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  shadowColor: "#959494",
  shadowOffset: { width: -4, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  zIndex: -1,
});
export const ListingItemText = styled("Text", {
  textTransform: "capitalize",
});
export const ListingSeparator = styled("View", {
  padding: 10,
});
