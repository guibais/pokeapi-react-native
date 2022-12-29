import { render, fireEvent } from "@testing-library/react-native";
import { PokemonDisplay } from ".";

it("should display the image correctly", () => {
  const image = { uri: "https://example.com/image.jpg" };
  const { getByTestId } = render(<PokemonDisplay image={image} />);
  expect(getByTestId("pokemon-display").props.source).toEqual(image);
});
