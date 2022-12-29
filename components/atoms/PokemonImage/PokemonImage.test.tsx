import { render, fireEvent } from "@testing-library/react-native";
import { PokemonImage } from ".";

it("should display the image correctly", () => {
  const image = "https://example.com/image.jpg";
  const { getByTestId } = render(<PokemonImage image={image} />);
  expect(getByTestId("pokemon-image").props.source).toEqual({
    uri: image,
  });
});
