import { HamburgerWrapper } from "./HamburgerContentStyles";
import HamburgerHeader from "./HamburgerHeader";
import HamburgerItems from "./HamburgerItems";
import HamburgerCustomerCenter from "./HamburgerCustomerCenter";

const HamburgerContent = () => {
  return (
    <HamburgerWrapper>
      <HamburgerHeader />
      <HamburgerItems />
      <HamburgerCustomerCenter />
    </HamburgerWrapper>
  );
};

export default HamburgerContent;
