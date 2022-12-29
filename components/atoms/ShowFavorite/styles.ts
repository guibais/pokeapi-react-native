import { styled } from "stitches-native";

export const ShowFavorite = styled("TouchableOpacity", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
});

export const FavoriteText = styled("Text", {
  fontSize: 14,
  marginLeft: 5,
  display: "flex",
  alignItems: "center",
  marginTop: 4,
  variants: {
    isFavorite: {
      true: {
        color: "#000000",
      },
      false: {
        color: "#d3d3d3",
      },
    },
  },
});
