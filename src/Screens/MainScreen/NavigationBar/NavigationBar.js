import Logo from "./Logo";
import NavigationContent from "./NavigationContent";
import {
  NavigationBarInnerContainer,
  NavigationBarOuterContainer
} from "./NavigationBarStyles";

const NavigationBar = () => {
  return (
    <NavigationBarOuterContainer>
      <NavigationBarInnerContainer>
        <Logo />
        <NavigationContent />
      </NavigationBarInnerContainer>
    </NavigationBarOuterContainer>
  );
};

export default NavigationBar;
