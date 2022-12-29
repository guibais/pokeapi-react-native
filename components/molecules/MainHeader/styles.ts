import { styled } from "stitches-native";

export const SafeArea = styled("SafeAreaView", {
  backgroundColor: "#ed3337",
});

export const HeaderContainer = styled("View", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "auto",
  backgroundColor: "#ed3337",
  borderBottomWidth: 2,
  paddingVertical: 10,
});

export const HeaderInputContainer = styled("View", {
  fontSize: 18,
  height: 40,
  width: 220,
  borderColor: "white",
  backgroundColor: "#ececec",

  borderRadius: 20,
  display: "flex",
  flexDirection: "row",
  paddingLeft: 20,
  paddingRight: 24,
});

export const BottomSection = styled("View", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginVertical: 30,
});

export const PokeLine = styled("View", {
  width: 30,
  height: 30,
  borderRadius: 30 / 2,
  backgroundColor: "#fff",
  position: "absolute",
  bottom: -30 / 2,
  borderWidth: 2,
});

export const SearchButton = styled("TouchableOpacity", {
  marginLeft: 10,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
});
