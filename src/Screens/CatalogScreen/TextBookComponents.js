import {
  CDImage,
  CombinedImage,
  ImageContainer,
  PackageImage,
  TextBookBundles,
  TextBookComponentsContainer,
  TextBookComponentsTitle
} from "./TextBookComponentsStyles";

const TextBookComponents = () => {
  return (
    <TextBookComponentsContainer>
      <TextBookComponentsTitle>Components</TextBookComponentsTitle>
      <TextBookBundles>
        <ImageContainer>
          <CDImage src={`/assets/images/cd.png`} alt={`CD Image`} />
        </ImageContainer>
        <ImageContainer>
          <PackageImage
            src={`/assets/images/package.png`}
            alt={`Package Image`}
          />
        </ImageContainer>
        <ImageContainer>
          <CombinedImage
            src={`/assets/images/combined.png`}
            alt={`Combined Image`}
          />
        </ImageContainer>
      </TextBookBundles>
    </TextBookComponentsContainer>
  );
};

export default TextBookComponents;
