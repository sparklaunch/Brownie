import { Link } from "react-router-dom";

const SignInFindAccount = () => {
  return (
    <div className={`text-[14px] text-center`}>
      <Link className={`pr-3 border-r-2 border-[#DFDFDF]`} to={"/find-id"}>
        아이디 찾기
      </Link>
      <Link className={`pl-3`} to={"/find-password"}>
        비밀번호 찾기
      </Link>
    </div>
  );
};

export default SignInFindAccount;
