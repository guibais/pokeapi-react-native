import { styled } from "stitches-native";

export const InputContainer = styled("View", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  paddingVertical: 10,
  paddingLeft: 0,
  paddingRight: 40,
});

export const Input = styled("TextInput", {
  fontSize: 16,
  height: "100%",
  width: "100%",
});

export const ClearButton = styled("TouchableOpacity", {
  marginLeft: 5,
});
