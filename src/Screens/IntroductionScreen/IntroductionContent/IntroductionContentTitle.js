import {
  IntroductionContentSubtitleText,
  IntroductionContentTitleContainer,
  IntroductionContentTitleText
} from "./IntroductionContentTitleStyles";

const IntroductionContentTitle = () => {
  return (
    <IntroductionContentTitleContainer>
      <IntroductionContentTitleText>
        AI 스피킹이란?
      </IntroductionContentTitleText>
      <IntroductionContentSubtitleText>
        영어를 읽고 말하기 학습을 할 수 있는
      </IntroductionContentSubtitleText>
      <IntroductionContentSubtitleText>
        온라인 스피킹 프로그램
      </IntroductionContentSubtitleText>
    </IntroductionContentTitleContainer>
  );
};

export default IntroductionContentTitle;
