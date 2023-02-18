import IntroductionContentFeature from "./IntroductionContentFeature";

const IntroductionContentFeatures = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <IntroductionContentFeature
        icon={`finger_one`}
        text={`책 읽기를 통해 영어의 문자와 소리에 친숙해져요.`}
      />
      <IntroductionContentFeature
        icon={`finger_two`}
        text={`읽기 연습을 통해 자신감을 키울 수 있어요.`}
      />
    </div>
  );
};

export default IntroductionContentFeatures;
