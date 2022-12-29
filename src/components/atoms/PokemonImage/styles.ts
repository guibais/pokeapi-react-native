import { styled } from "stitches-native";
import { pokemonPosition } from "../../../constants/Styles";

export const Image = styled("Image", {
  height: 100,
  width: 100,
  position: "absolute",
  top: pokemonPosition,
  alignSelf: "center",
  resizeMode: "contain",
});
