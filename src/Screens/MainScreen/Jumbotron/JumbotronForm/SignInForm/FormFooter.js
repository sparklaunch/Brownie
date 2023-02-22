import { useNavigate } from "react-router-dom";
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
    <div className={"flex flex-row justify-center items-center mt-[32px]"}>
      <p
        className={`text-[#DFDFDF] font-extralight text-[14px] cursor-pointer`}
        onClick={onClickSignUp}
      >
        회원가입
      </p>
      {/*<div className={`w-[1px] h-[10px] bg-[#DFDFDF]`} />*/}
      {/*<Link*/}
      {/*  to={"/find-account"}*/}
      {/*  className={`text-[#DFDFDF] font-extralight text-[14px] pl-[10px]`}*/}
      {/*>*/}
      {/*  아이디/비밀번호 찾기*/}
      {/*</Link>*/}
    </div>
  );
};

export default FormFooter;
