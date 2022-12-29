import { render } from "@testing-library/react-native";
import { Highlighted } from ".";

it("should display the title and number correctly", () => {
  const title = "This is a title";
  const number = 42;
  const { getByText } = render(
    <Highlighted title={title} number={number} color={"blue"} />
  );
  expect(getByText(title)).toBeTruthy();
  expect(getByText(String(number))).toBeTruthy();
});
