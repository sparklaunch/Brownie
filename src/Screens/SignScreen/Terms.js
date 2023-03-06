import { PrivacyLink, TermsContainer, TermsLink } from "./TermsStyles";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();
  const onClickTerms = () => {
    navigate("/terms");
  };
  return (
    <TermsContainer onClick={onClickTerms}>
      <PrivacyLink>개인정보취급방침</PrivacyLink>
      <TermsLink>이용약관</TermsLink>
    </TermsContainer>
  );
};

export default Terms;
