import {
  AdministratorSiteText,
  HamburgerMenuContainer,
  SignInButton
} from "./HamburgerMenuStyles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";

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
  return (
    <HamburgerMenuContainer>
      <SignInButton onClick={onClickSignIn}>로그인</SignInButton>
      <AdministratorSiteText onClick={onClickAdministrator}>
        관리자 사이트
      </AdministratorSiteText>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
