import {
  IntroductionContentFeatureContainer,
  IntroductionContentFeatureIcon,
  IntroductionContentText
} from "./IntroductionContentFeatureStyles";

const IntroductionContentFeature = ({ icon, text }) => {
  return (
    <IntroductionContentFeatureContainer>
      <IntroductionContentFeatureIcon
        src={`/assets/images/${icon}.svg`}
        alt={`${icon} Icon`}
      />
      <IntroductionContentText>{text}</IntroductionContentText>
    </IntroductionContentFeatureContainer>
  );
};

export default IntroductionContentFeature;
