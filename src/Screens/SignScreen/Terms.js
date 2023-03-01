import { useNavigate } from "react-router-dom";
import { PrivacyLink, TermsContainer, TermsLink } from "./TermsStyles";

const Terms = () => {
  const navigate = useNavigate();
  const onClickPrivacy = () => {
    navigate("/privacy");
  };
  const onClickTerms = () => {
    navigate("/terms");
  };
  return (
    <TermsContainer>
      <PrivacyLink onClick={onClickPrivacy}>개인정보취급방침</PrivacyLink>
      <TermsLink onClick={onClickTerms}>이용약관</TermsLink>
    </TermsContainer>
  );
};

export default Terms;
