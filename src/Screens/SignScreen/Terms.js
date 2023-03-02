import { PrivacyLink, TermsContainer, TermsLink } from "./TermsStyles";

const Terms = () => {
  // const navigate = useNavigate();
  // const onClickPrivacy = () => {
  //   navigate("/privacy");
  // };
  // const onClickTerms = () => {
  //   navigate("/terms");
  // };
  return (
    <TermsContainer>
      <PrivacyLink>개인정보취급방침</PrivacyLink>
      <TermsLink>이용약관</TermsLink>
    </TermsContainer>
  );
};

export default Terms;
