import {
  HamburgerMenuContainer,
  InstructionsText,
  SignInButton
} from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  return (
    <HamburgerMenuContainer>
      <SignInButton>로그인</SignInButton>
      <InstructionsText>사용 설명서</InstructionsText>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
