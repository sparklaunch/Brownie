import * as animationData from "./confetti.json";
import Lottie from "react-lottie";

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
    <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>
      <Lottie options={lottieOptions} height={400} width={400} />
    </div>
  );
};

export default Confetti;
