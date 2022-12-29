import { render } from "@testing-library/react-native";
import { ImageContainer } from ".";
import "@testing-library/jest-dom/extend-expect";

it("should display the image correctly", () => {
  const image = "https://example.com/image.jpg";
  const { getByTestId } = render(<ImageContainer image={image} />);
  expect(getByTestId("image-container").props.source).toEqual({
    uri: image,
  });
});

it("should display the component with a 10 pixel blur", () => {
  const { getByTestId } = render(<ImageContainer image="" />);
  expect(getByTestId("image-container").props.blurRadius).toEqual(10);
});
