import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import tabValueAtom from "../../../../../Stores/Auth/tabValue";

const FormFooter = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useRecoilState(tabValueAtom);
  const onClickSignUp = () => {
    setTabValue(1);
    navigate("/signin");
  };
  return (
    <div className={"flex flex-row justify-center mt-3"}>
      <p
        className={`text-white font-extralight text-[14px] pr-3 border-r-[1px] border-l-white cursor-pointer`}
        onClick={onClickSignUp}
      >
        회원가입
      </p>
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
