import IntroductionTryTitle from "./IntroductionTryTitle";
import IntroductionTryButton from "./IntroductionTryButton";
import IntroductionTryDevices from "./IntroductionTryDevices";
import {
  IntroductionTryInnerContainer,
  IntroductionTryLeftContainer,
  IntroductionTryOuterContainer
} from "./IntroductionTryStyles";

const IntroductionTry = () => {
  return (
    <IntroductionTryOuterContainer>
      <IntroductionTryInnerContainer>
        <IntroductionTryLeftContainer>
          <IntroductionTryTitle />
          <IntroductionTryButton />
        </IntroductionTryLeftContainer>
        <IntroductionTryDevices />
      </IntroductionTryInnerContainer>
    </IntroductionTryOuterContainer>
  );
};

export default IntroductionTry;
