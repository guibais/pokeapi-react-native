import { styled } from "stitches-native";
import { pokemonPosition } from "../../../constants/Styles";

export const PokemonDisplay = styled("Image", {
  height: 130,
  width: 130,
  position: "absolute",
  resizeMode: "contain",
  top: pokemonPosition + 30,
  alignSelf: "center",
});
