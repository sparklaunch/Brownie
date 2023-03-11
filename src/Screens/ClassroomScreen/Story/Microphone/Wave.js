import * as animationData from "./recording.json";
import Lottie from "react-lottie";

const Wave = () => {
  const lottieOptions = {
    // Lottie의 옵션을 설정합니다.
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return <Lottie options={lottieOptions} height={200} width={200} />;
};

export default Wave;
