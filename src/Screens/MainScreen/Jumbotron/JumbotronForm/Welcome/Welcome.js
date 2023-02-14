import FormBackground from "../FormBackground";
import WelcomeTitle from "./WelcomeTitle";

const Welcome = () => {
  return (
    <div
      className={`w-[300px] h-[120px] rounded-lg shadow-2xl overflow-clip relative`}
    >
      <FormBackground />
      <div
        className={`p-[16px] z-[1] absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}
      >
        <WelcomeTitle />
      </div>
    </div>
  );
};

export default Welcome;
