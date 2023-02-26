import IntroductionContentFeature from "./IntroductionContentFeature";
import { IntroductionContentFeaturesContainer } from "./IntroductionContentFeaturesStyles";

const IntroductionContentFeatures = () => {
  return (
    <IntroductionContentFeaturesContainer>
      <IntroductionContentFeature
        icon={`finger_one`}
        text={`책 읽기를 통해 영어의 문자와 소리에 친숙해져요.`}
      />
      <IntroductionContentFeature
        icon={`finger_two`}
        text={`읽기 연습을 통해 자신감을 키울 수 있어요.`}
      />
    </IntroductionContentFeaturesContainer>
  );
};

export default IntroductionContentFeatures;
