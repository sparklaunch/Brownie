import {
  AdministratorSiteText,
  HamburgerMenuContainer,
  SignInButton,
  SignOutButton
} from "./HamburgerMenuStyles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";
import isLoggedIn from "../../../../Utilities/isLoggedIn";

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenAtom);
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
    window.location.reload();
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
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
