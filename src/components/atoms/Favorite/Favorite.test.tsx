import { render, fireEvent } from "@testing-library/react-native";
import { Favorite } from ".";

it("should render correctly with all props", () => {
  const { getByTestId } = render(
    <Favorite status={"favorited"} onPress={() => {}} />
  );
  expect(getByTestId("favorited-icon")).toBeTruthy();
});

it("should render correctly without onPress prop", () => {
  const { getByTestId } = render(<Favorite status={"favorited"} />);
  expect(getByTestId("favorited-icon")).toBeTruthy();
});

it("should call onPress when the icon is pressed", () => {
  const onPress = jest.fn();
  const { getByTestId } = render(
    <Favorite onPress={onPress} status="favorited" />
  );

  fireEvent.press(getByTestId("favorited-icon"));
  expect(onPress).toHaveBeenCalled();
});

it("should change icon when status changes", () => {
  const { getByTestId, rerender } = render(
    <Favorite status={"favorited"} onPress={() => {}} />
  );
  expect(getByTestId("favorited-icon")).toBeTruthy();

  rerender(<Favorite status={"not-favorited"} onPress={() => {}} />);
  expect(getByTestId("not-favorited-icon")).toBeTruthy();
});
