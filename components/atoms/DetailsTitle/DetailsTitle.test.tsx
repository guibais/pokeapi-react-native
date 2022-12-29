import { render } from "@testing-library/react-native";
import { DetailsTitle } from ".";

it("should display the title", () => {
  const title = "This is a title";
  const { getByText } = render(<DetailsTitle title={title} />);
  expect(getByText(title)).toBeTruthy();
});
