import * as animationData from "./recording.json";
import Lottie from "react-lottie";

const WordWave = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }; // Lottie options
  return <Lottie options={lottieOptions} height={200} width={200} />;
};

export default WordWave;
