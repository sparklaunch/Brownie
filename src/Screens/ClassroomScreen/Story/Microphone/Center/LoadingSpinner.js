import * as animationData from "./loading.json";
import Lottie from "react-lottie";

const LoadingSpinner = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie options={lottieOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingSpinner;
