import { useNavigate } from "react-router-dom";
import { IntroductionTryButtonContainer } from "./IntroductionTryButtonStyles";

const IntroductionTryButton = () => {
  const navigate = useNavigate();
  const onClickTryButton = () => {
    navigate("/demo");
  };
  return (
    <IntroductionTryButtonContainer onClick={onClickTryButton}>
      무료 체험
    </IntroductionTryButtonContainer>
  );
};

export default IntroductionTryButton;
