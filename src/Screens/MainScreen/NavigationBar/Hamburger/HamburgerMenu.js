import {
  AdministratorSiteText,
  HamburgerMenuContainer,
  InstructionsText,
  SignInButton
} from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  return (
    <HamburgerMenuContainer>
      <SignInButton>로그인</SignInButton>
      <InstructionsText>사용 설명서</InstructionsText>
      <AdministratorSiteText>관리자 사이트</AdministratorSiteText>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
