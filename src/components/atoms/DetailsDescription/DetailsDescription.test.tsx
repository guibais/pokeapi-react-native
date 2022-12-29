import { render } from "@testing-library/react-native";
import { DetailsDescription } from ".";

it("should display the description", () => {
  const description = "This is a description";
  const { getByText } = render(
    <DetailsDescription description={description} />
  );
  expect(getByText(description)).toBeTruthy();
});
