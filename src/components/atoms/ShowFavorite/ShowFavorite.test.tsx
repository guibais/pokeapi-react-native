import { render, fireEvent } from "@testing-library/react-native";
import { ShowFavorite } from ".";

it("should display the title correctly", () => {
  const showFavoriteTitle = "This is a title";
  const { getByText } = render(
    <ShowFavorite
      showFavoriteTitle={showFavoriteTitle}
      showFavoriteStatus={"favorited"}
    />
  );
  expect(getByText(showFavoriteTitle)).toBeTruthy();
});

it("should display the correct icon according to the status", () => {
  const { getByTestId } = render(
    <ShowFavorite showFavoriteStatus="favorited" showFavoriteTitle={""} />
  );
  expect(getByTestId("favorited-icon")).toBeTruthy();

  const { getByTestId: getByTestIdNotFavorited } = render(
    <ShowFavorite showFavoriteStatus="not-favorited" showFavoriteTitle={""} />
  );
  expect(getByTestIdNotFavorited("not-favorited-icon")).toBeTruthy();
});

it("should call the onPress function when the component is clicked", () => {
  const onPress = jest.fn();
  const { getByTestId } = render(
    <ShowFavorite
      showFavoriteOnPress={onPress}
      showFavoriteStatus={"favorited"}
      showFavoriteTitle={""}
    />
  );
  fireEvent.press(getByTestId("favorited-icon"));
  expect(onPress).toHaveBeenCalled();
});
