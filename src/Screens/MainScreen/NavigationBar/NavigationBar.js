import Logo from "./Logo";
import NavigationContent from "./NavigationContent";
import {
  NavigationBarInnerContainer,
  NavigationBarOuterContainer
} from "./NavigationBarStyles";
import ManualScreen from "../../ManualScreen/ManualScreen";

const NavigationBar = () => {
  return (
    <>
      <NavigationBarOuterContainer>
        <NavigationBarInnerContainer>
          <Logo />
          <NavigationContent />
        </NavigationBarInnerContainer>
      </NavigationBarOuterContainer>
      <ManualScreen />
    </>
  );
};

export default NavigationBar;
