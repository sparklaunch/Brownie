import { HamburgerWrapper } from "./HamburgerContentStyles";
import HamburgerHeader from "./HamburgerHeader";
import HamburgerItems from "./HamburgerItems";

const HamburgerContent = () => {
  return (
    <HamburgerWrapper>
      <HamburgerHeader />
      <HamburgerItems />
    </HamburgerWrapper>
  );
};

export default HamburgerContent;
