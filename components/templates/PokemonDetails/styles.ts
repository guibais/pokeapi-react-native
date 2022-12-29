import { styled } from "stitches-native";
import {
  imageContainerSize,
  mainBorderRadius,
} from "../../../constants/Styles";

export const Page = styled("ScrollView", { backgroundColor: "#f8faf9" });

export const Container = styled("View", {
  borderTopLeftRadius: mainBorderRadius,
  borderTopRightRadius: mainBorderRadius,
  backgroundColor: "#f8faf9",
  left: 0,
  paddingTop: mainBorderRadius,
  marginTop: -(imageContainerSize - 100),
});
