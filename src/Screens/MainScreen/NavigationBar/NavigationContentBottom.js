import { useLocation, useNavigate } from "react-router-dom";
import SignInButton from "./SignButtons/SignInButton";
import isLoggedIn from "../../../Utilities/isLoggedIn";
import SignOutButton from "./SignButtons/SignOutButton";
import {
  NavigationContentBottomContainer,
  NavigationLink
} from "./NavigationContentBottomStyles";

const NavigationContentBottom = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClickOnlineClassroom = () => {
    navigate("/");
  };
  const onClickIntroduction = () => {
    navigate("/introduction");
  };
  const onClickCatalog = () => {
    navigate("/catalog");
  };
  const onClickMyPage = () => {
    navigate("/mypage");
  };
  return (
    <NavigationContentBottomContainer>
      <NavigationLink
        onClick={onClickOnlineClassroom}
        accented={pathname === "/"} // 현재 경로가 "/"인지 확인합니다.
      >
        온라인 학습관
      </NavigationLink>
      <NavigationLink
        onClick={onClickIntroduction}
        accented={pathname === "/introduction"} // 현재 경로가 "/introduction"인지 확인합니다.
      >
        프로그램 소개
      </NavigationLink>
      <NavigationLink
        onClick={onClickCatalog}
        accented={pathname === "/catalog"} // 현재 경로가 "/catalog"인지 확인합니다.
      >
        교재 구성
      </NavigationLink>
      {isLoggedIn() && (
        <NavigationLink
          onClick={onClickMyPage}
          accented={pathname === "/mypage"} // 현재 경로가 "/mypage"인지 확인합니다.
        >
          마이페이지
        </NavigationLink>
      )}
      {isLoggedIn() ? <SignOutButton /> : <SignInButton />}
    </NavigationContentBottomContainer>
  );
};

export default NavigationContentBottom;
