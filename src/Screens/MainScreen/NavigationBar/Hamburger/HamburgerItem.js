import {
  HamburgerItemContainer,
  HamburgerItemText
} from "./HamburgerItemStyles";

const HamburgerItem = ({ text }) => {
  return (
    <HamburgerItemContainer>
      <HamburgerItemText>{text}</HamburgerItemText>
    </HamburgerItemContainer>
  );
};

export default HamburgerItem;
