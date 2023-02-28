import FormBackground from "../FormBackground";
import WelcomeTitle from "./WelcomeTitle";
import WelcomeButtons from "./WelcomeButtons";
import { WelcomeInnerContainer, WelcomeOuterContainer } from "./WelcomeStyles";

const Welcome = () => {
  return (
    <WelcomeOuterContainer>
      <FormBackground />
      <WelcomeInnerContainer>
        <WelcomeTitle />
        <WelcomeButtons />
      </WelcomeInnerContainer>
    </WelcomeOuterContainer>
  );
};

export default Welcome;
