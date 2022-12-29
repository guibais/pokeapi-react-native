import { styled } from "stitches-native";

export const TitleContainer = styled("View", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  margin: 20,
});

export const TitleContainerName = styled("Text", {
  textTransform: "capitalize",
  fontSize: 28,
  fontWeight: "bold",
  paddingLeft: 5,
});

export const TitleContainerId = styled("Text", {
  paddingLeft: 5,
  fontSize: 14,
  fontWeight: "300",
});
