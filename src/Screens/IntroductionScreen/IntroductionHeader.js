import {
  IntroductionHeaderImage,
  IntroductionHeaderInnerContainer,
  IntroductionHeaderOuterContainer,
  IntroductionHeaderTitle
} from "./IntroductionHeaderStyles";

const IntroductionHeader = () => {
  return (
    <IntroductionHeaderOuterContainer>
      <IntroductionHeaderInnerContainer>
        <IntroductionHeaderImage
          src={"/assets/images/rectangle.svg"}
          alt={"Rectangle Icon"}
        />
        <IntroductionHeaderTitle>프로그램 소개</IntroductionHeaderTitle>
      </IntroductionHeaderInnerContainer>
    </IntroductionHeaderOuterContainer>
  );
};

export default IntroductionHeader;
