import IntroductionContentTitle from "./IntroductionContentTitle";
import IntroductionContentFeatures from "./IntroductionContentFeatures";
import {
  IntroductionContentInnerContainer,
  IntroductionContentOuterContainer
} from "./IntroductionContentStyles";

const IntroductionContent = () => {
  return (
    <IntroductionContentOuterContainer>
      <IntroductionContentInnerContainer>
        <IntroductionContentTitle />
        <IntroductionContentFeatures />
      </IntroductionContentInnerContainer>
    </IntroductionContentOuterContainer>
  );
};

export default IntroductionContent;
