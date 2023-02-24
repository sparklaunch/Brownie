import NavigationContentTop from "./NavigationContentTop";
import NavigationContentBottom from "./NavigationContentBottom";
import Hamburger from "./Hamburger/Hamburger";
import {
  HamburgerContainer,
  NavigationContentContainer
} from "./NavigationContentStyles";

const NavigationContent = () => {
  return (
    <>
      <HamburgerContainer>
        <Hamburger />
      </HamburgerContainer>
      <NavigationContentContainer>
        <NavigationContentTop />
        <NavigationContentBottom />
      </NavigationContentContainer>
    </>
  );
};

export default NavigationContent;
