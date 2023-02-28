import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import tabValueAtom from "../../../../../Stores/Auth/tabValue";
import { FormFooterContainer, SignUpButton } from "./FormFooterStyles";

const FormFooter = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useRecoilState(tabValueAtom);
  const onClickSignUp = () => {
    setTabValue(1);
    navigate("/signin");
  };
  return (
    <FormFooterContainer>
      <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
    </FormFooterContainer>
  );
};

export default FormFooter;
