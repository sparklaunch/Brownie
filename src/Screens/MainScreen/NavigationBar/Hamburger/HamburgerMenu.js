import {
  AdministratorSiteText,
  HamburgerMenuContainer,
  ManualText,
  SignInButton,
  SignOutButton
} from "./HamburgerMenuStyles";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";
import isLoggedIn from "../../../../Utilities/isLoggedIn";
import manualOpenAtom from "../../../../Stores/Misc/manualOpen";

const HamburgerMenu = () => {
  const setManualOpen = useSetRecoilState(manualOpenAtom);
  const navigate = useNavigate();
  const setDrawerOpen = useSetRecoilState(drawerOpenAtom);
  const onClickSignIn = () => {
    setDrawerOpen(false);
    navigate("/signin");
  };
  const onClickAdministrator = () => {
    setDrawerOpen(false);
    navigate("/administrator");
  };
  const onClickSignOut = () => {
    setDrawerOpen(false);
    sessionStorage.removeItem("userNumber");
    sessionStorage.removeItem("studentName");
    navigate("/");
  };
  const onClickManualText = () => {
    setDrawerOpen(false);
    setManualOpen(true);
  };
  return (
    <HamburgerMenuContainer>
      {isLoggedIn() ? (
        <SignOutButton onClick={onClickSignOut}>로그아웃</SignOutButton>
      ) : (
        <SignInButton onClick={onClickSignIn}>로그인</SignInButton>
      )}
      <AdministratorSiteText onClick={onClickAdministrator}>
        관리자 사이트
      </AdministratorSiteText>
      <ManualText onClick={onClickManualText}>사용 설명서</ManualText>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
