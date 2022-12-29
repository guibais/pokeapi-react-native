import { render, fireEvent } from "@testing-library/react-native";
import { TagComponent } from ".";

it("should render correctly with all props", () => {
  const { getByText } = render(<TagComponent type={"bug"} />);
  expect(getByText("bug")).toBeTruthy();
});
