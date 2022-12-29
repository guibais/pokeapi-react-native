import { styled } from "stitches-native";

export const TagTitle = styled("Text", {
  fontSize: 18,
  fontWeight: "bold",
  paddingBottom: 10,
});

export const Tags = styled("View", {
  display: "flex",
  justifyContent: "space-between",
  paddingHorizontal: 20,
});

export const TagsList = styled("View", {
  display: "flex",
  flexDirection: "row",
});

export const TagComponentStyle = styled("View", {
  marginHorizontal: 5,
});
