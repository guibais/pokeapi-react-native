import { render, fireEvent } from "@testing-library/react-native";
import { SearchInput } from ".";

it("should display the clear field button correctly", () => {
  const onClearField = jest.fn();
  const { getByTestId } = render(
    <SearchInput
      showClearButton
      onClearField={onClearField}
      placeholder={""}
      placeholderTextColor={""}
    />
  );
  expect(getByTestId("clear-button")).toBeTruthy();
  fireEvent.press(getByTestId("clear-button"));
  expect(onClearField).toHaveBeenCalled();
});
