import { Link } from "react-router-dom";

const FormFooter = () => {
  return (
    <div className={"flex flex-row justify-center mt-3"}>
      <Link
        to={"/register"}
        className={`text-white font-extralight text-[14px] pr-3 border-r-[1px] border-l-white`}
      >
        회원가입
      </Link>
      <Link
        to={"/find-account"}
        className={`text-white font-extralight text-[14px] pl-3`}
      >
        아이디/비밀번호 찾기
      </Link>
    </div>
  );
};

export default FormFooter;
