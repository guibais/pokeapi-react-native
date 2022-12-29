import { styled } from "stitches-native";

export const TagComponent = styled("View", {
  display: "flex",
  alignSelf: "flex-start",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 20,
  variants: {
    type: {
      bug: {
        backgroundColor: "#aabb23",
      },
      dark: {
        backgroundColor: "#3e2d22",
      },
      dragon: {
        backgroundColor: "#7a67dd",
      },
      electric: {
        backgroundColor: "#e4940c",
      },
      fairy: {
        backgroundColor: "#f8bef4",
      },
      fighting: {
        backgroundColor: "#81331d",
      },
      fire: {
        backgroundColor: "#ea420e",
      },
      flying: {
        backgroundColor: "#94a3f0",
      },
      ghost: {
        backgroundColor: "#4b4c98",
      },
      grass: {
        backgroundColor: "#63b42d",
      },
      ground: {
        backgroundColor: "#d4b35b",
      },
      ice: {
        backgroundColor: "#6cd2f5",
      },
      normal: {
        backgroundColor: "#cac5bc",
      },
      poison: {
        backgroundColor: "#934594",
      },
      psychic: {
        backgroundColor: "#eb4780",
      },
      rock: {
        backgroundColor: "#9e863b",
      },
      steel: {
        backgroundColor: "#8f8e9e",
      },
      water: {
        backgroundColor: "#349bf8",
      },
    },
  },
});

export const TagText = styled("Text", {
  fontSize: 20,
  fontWeight: "bold",
  color: "#f6f6f6",
  textTransform: "capitalize",
});
