import { HamburgerHeaderContainer } from "./HamburgerHeaderStyles";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerCloseIcon from "./HamburgerCloseIcon";

const HamburgerHeader = () => {
  return (
    <HamburgerHeaderContainer>
      <HamburgerMenu />
      <HamburgerCloseIcon />
    </HamburgerHeaderContainer>
  );
};

export default HamburgerHeader;
