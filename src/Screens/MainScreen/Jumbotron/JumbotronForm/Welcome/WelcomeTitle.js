import {
  WelcomeGreetingText,
  WelcomeTitleContainer,
  WelcomeTitleText
} from "./WelcomeTitleStyles";

const WelcomeTitle = () => {
  const studentName = sessionStorage.getItem("studentName");
  return (
    <WelcomeTitleContainer>
      <WelcomeTitleText>{studentName} 학생</WelcomeTitleText>
      <WelcomeGreetingText>안녕하세요!</WelcomeGreetingText>
    </WelcomeTitleContainer>
  );
};

export default WelcomeTitle;
