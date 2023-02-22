import FormBackground from "../FormBackground";
import WelcomeTitle from "./WelcomeTitle";
import WelcomeButtons from "./WelcomeButtons";

const Welcome = () => {
  return (
    <div
      className={`w-[300px] h-[240px] rounded-lg shadow-2xl overflow-clip relative`}
    >
      <FormBackground />
      <div
        className={`p-[16px] z-[1] absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-stretch`}
      >
        <WelcomeTitle />
        <WelcomeButtons />
      </div>
    </div>
  );
};

export default Welcome;
