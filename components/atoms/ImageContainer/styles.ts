import { styled } from "stitches-native";
import { imageContainerSize } from "../../../constants/Styles";

export const ImageContainer = styled("ImageBackground", {
  height: imageContainerSize,
  width: "100%",
  resizeMode: "stretch",
});
