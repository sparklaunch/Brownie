import {
  CDImage,
  CombinedImage,
  ImageContainer,
  PackageImage,
  TextBookBundles,
  TextBookComponentsContainer,
  TextBookComponentsTitle,
  TextContainer,
  TextDescription,
  TextTitle
} from "./TextBookComponentsStyles";

const TextBookComponents = () => {
  return (
    <TextBookComponentsContainer>
      <TextBookComponentsTitle>Components</TextBookComponentsTitle>
      <TextBookBundles>
        <ImageContainer area={`cd-image`}>
          <CDImage src={`/assets/images/cd.png`} alt={`CD Image`} />
        </ImageContainer>
        <ImageContainer area={`package-image`}>
          <PackageImage
            src={`/assets/images/package.png`}
            alt={`Package Image`}
          />
        </ImageContainer>
        <ImageContainer area={`combined-image`}>
          <CombinedImage
            src={`/assets/images/combined.png`}
            alt={`Combined Image`}
          />
        </ImageContainer>
        <TextContainer area={`cd-text`}>
          <TextTitle>5 CDs</TextTitle>
          <TextDescription>Storybook에 부착.</TextDescription>
        </TextContainer>
        <TextContainer area={`package-text`}>
          <TextTitle>Full Package</TextTitle>
        </TextContainer>
        <TextContainer area={`combined-text`}>
          <TextTitle>Combined Version</TextTitle>
        </TextContainer>
      </TextBookBundles>
    </TextBookComponentsContainer>
  );
};

export default TextBookComponents;
