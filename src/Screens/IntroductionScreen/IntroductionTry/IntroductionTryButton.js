import { useNavigate } from "react-router-dom";

const IntroductionTryButton = () => {
  const navigate = useNavigate();
  const onClickTryButton = () => {
    navigate("/demo");
  };
  return (
    <p
      className={`inline-block text-white font-[Jua] text-[24px] px-[100px] py-[20px] border-2 border-white rounded-lg cursor-pointer`}
      onClick={onClickTryButton}
    >
      무료 체험
    </p>
  );
};

export default IntroductionTryButton;
