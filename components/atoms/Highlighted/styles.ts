import { styled } from "stitches-native";

export const Highlighted = styled("View", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const HighlightedCircular = styled("View", {
  height: 60,
  width: 60,
  borderRadius: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignContent: "space-between",
  padding: 10,
  variants: {
    backgroundColor: {
      blue: { backgroundColor: "#d8e2f9" },
      orange: { backgroundColor: "#f9e8da" },
    },
  },
});

export const HighlightedText = styled("Text", {
  textAlign: "center",
  fontSize: 10,
});

export const HighlightedNumber = styled("Text", {
  textAlign: "center",
  fontSize: 18,
  fontWeight: "bold",
});
