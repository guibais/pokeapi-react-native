import { render } from "@testing-library/react-native";
import { BasicTitle } from ".";

it("should display the title", () => {
  const title = "This is a title";
  const { getByText } = render(<BasicTitle title={title} />);
  expect(getByText(title)).toBeTruthy();
});
