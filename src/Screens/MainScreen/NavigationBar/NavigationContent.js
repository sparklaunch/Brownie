import NavigationContentTop from "./NavigationContentTop";
import NavigationContentBottom from "./NavigationContentBottom";
import Hamburger from "./Hamburger";
import { NavigationContentContainer } from "./NavigationContentStyles";
import { HamburgerContainer } from "./HamburgerStyles";

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
