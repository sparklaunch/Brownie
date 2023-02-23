import {
  TextBookFeatureBullet,
  TextBookFeatureContainer,
  TextBookFeatureText
} from "./TextBookFeatureStyles";

const TextBookFeature = ({ text }) => {
  return (
    <TextBookFeatureContainer>
      <TextBookFeatureBullet
        src={`/assets/images/bullet.svg`}
        alt={`Bullet Icon`}
      />
      <TextBookFeatureText>{text}</TextBookFeatureText>
    </TextBookFeatureContainer>
  );
};

export default TextBookFeature;
