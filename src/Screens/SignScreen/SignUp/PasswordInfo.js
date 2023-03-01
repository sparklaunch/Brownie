import validPasswordSelector from "../../../Stores/Auth/validPassword";
import { useRecoilValue } from "recoil";
import {
  InfoIcon,
  PasswordInfoInnerContainer,
  PasswordInfoOuterContainer,
  PasswordInfoText
} from "./PasswordInfoStyles";

const PasswordInfo = () => {
  const validPassword = useRecoilValue(validPasswordSelector);
  return (
    <PasswordInfoOuterContainer>
      <PasswordInfoInnerContainer>
        <InfoIcon src={"assets/images/icons/info_icon.svg"} alt={"Info Icon"} />
        <PasswordInfoText validPassword={validPassword}>
          알파벳, 숫자, 특수문자 조합으로 최소 6자리, 최대 24자리로 입력하세요.
        </PasswordInfoText>
      </PasswordInfoInnerContainer>
    </PasswordInfoOuterContainer>
  );
};

export default PasswordInfo;
