import * as S from "./styles";

export type IImageContainer = {
  image: string;
};

export const ImageContainer = ({ image }: IImageContainer) => (
  <S.ImageContainer
    testID="image-container"
    source={{
      uri: image,
    }}
    blurRadius={10}
  ></S.ImageContainer>
);
