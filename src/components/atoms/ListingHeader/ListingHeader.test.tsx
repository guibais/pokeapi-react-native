import { render, fireEvent } from "@testing-library/react-native";
import { ListingHeader } from ".";

it("should display the header title correctly", () => {
  const headerTitle = "This is a header title";
  const { getByText } = render(
    <ListingHeader
      headerTitle={headerTitle}
      showFavoriteStatus={"favorited"}
      showFavoriteTitle={""}
    />
  );
  expect(getByText(headerTitle)).toBeTruthy();
});

it("should display the ShowFavorite component correctly with the passed props", () => {
  const showFavoriteTitle = "Show favorite";
  const showFavoriteStatus = "favorited";
  const showFavoriteOnPress = jest.fn();

  const { getByText } = render(
    <ListingHeader
      headerTitle={""}
      {...{ showFavoriteTitle, showFavoriteStatus, showFavoriteOnPress }}
    />
  );
  expect(getByText(showFavoriteTitle)).toBeTruthy();
  fireEvent.press(getByText(showFavoriteTitle));
  expect(showFavoriteOnPress).toHaveBeenCalled();
});
