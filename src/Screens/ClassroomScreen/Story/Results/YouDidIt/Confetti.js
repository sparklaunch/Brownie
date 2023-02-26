import * as animationData from "./confetti.json";
import Lottie from "react-lottie";
import { ConfettiContainer } from "./ConfettiStyles";

const Confetti = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <ConfettiContainer>
      <Lottie options={lottieOptions} height={400} width={400} />
    </ConfettiContainer>
  );
};

export default Confetti;
