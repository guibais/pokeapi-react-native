import {
  IListingItems,
  IMainHeader,
  ListingItems,
  MainHeader,
} from "../../molecules";

export type IHomeTemplate = IListingItems & IMainHeader;

export const HomeTemplate = (props: IHomeTemplate) => {
  return (
    <>
      <MainHeader {...props} />
      <ListingItems {...props} />
    </>
  );
};
