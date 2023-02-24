import { Link, useLocation } from "react-router-dom";
import SignInButton from "./SignButtons/SignInButton";
import isLoggedIn from "../../../Utilities/isLoggedIn";
import SignOutButton from "./SignButtons/SignOutButton";

const NavigationContentBottom = () => {
  const { pathname } = useLocation();
  return (
    <div className={`flex flex-row items-center justify-end`}>
      <Link
        to={"/"}
        className={`mr-[24px] text-[18px] font-[700] ${
          pathname === "/" ? `text-[#1AB9C5]` : `text-[#222222]`
        }`}
      >
        온라인 학습관
      </Link>
      <Link
        to={"/introduction"}
        className={`mr-[24px] text-[18px] font-[700] ${
          pathname === "/introduction" ? `text-[#1AB9C5]` : `text-[#222222]`
        }`}
      >
        프로그램 소개
      </Link>
      <Link
        to={"/catalog"}
        className={`mr-[24px] text-[18px] font-[700] ${
          pathname === "/catalog" ? `text-[#1AB9C5]` : `text-[#222222]`
        }`}
      >
        교재 구성
      </Link>
      {isLoggedIn() && (
        <Link
          to={"/mypage"}
          className={`mr-[24px] text-[18px] font-[700] text-[#222222]`}
        >
          마이페이지
        </Link>
      )}
      {isLoggedIn() ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default NavigationContentBottom;
