import validPasswordSelector from "../../../Stores/Auth/validPassword";
import { useRecoilValue } from "recoil";

const PasswordInfo = () => {
  const validPassword = useRecoilValue(validPasswordSelector);
  return (
    <div className={`mb-3`}>
      <div className={`flex flex-row items-center`}>
        <img src={"assets/images/icons/info_icon.svg"} alt={"Info Icon"} />
        <p
          className={`text-[13px] text-[#ACACAC] ml-2 ${
            !validPassword && `text-red-600`
          }`}
        >
          알파벳, 숫자, 특수문자 조합으로 최소 6자리, 최대 24자리로 입력하세요.
        </p>
      </div>
    </div>
  );
};

export default PasswordInfo;
