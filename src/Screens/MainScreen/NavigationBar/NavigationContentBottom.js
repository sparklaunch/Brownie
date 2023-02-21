import { Link } from "react-router-dom";
import SignInButton from "./SignButtons/SignInButton";
import isLoggedIn from "../../../Utilities/isLoggedIn";
import SignOutButton from "./SignButtons/SignOutButton";

const NavigationContentBottom = () => {
  return (
    <div className={`flex flex-row items-center justify-end`}>
      <Link to={"/classroom"} className={`mr-[32px] font-bold text-[#1AB9C5]`}>
        온라인 학습관
      </Link>
      <Link to={"/introduction"} className={`mr-[32px]`}>
        프로그램 소개
      </Link>
      <Link to={"/catalog"} className={`mr-[32px]`}>
        교재 구성
      </Link>
      {isLoggedIn() && (
        <Link to={"/mypage"} className={`mr-[32px]`}>
          마이페이지
        </Link>
      )}
      {isLoggedIn() ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default NavigationContentBottom;
