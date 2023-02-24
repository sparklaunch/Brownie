import {
  HamburgerItemContainer,
  HamburgerItemText
} from "./HamburgerItemStyles";

const HamburgerItem = ({ text, link }) => {
  return (
    <HamburgerItemContainer>
      <HamburgerItemText>{text}</HamburgerItemText>
    </HamburgerItemContainer>
  );
};

export default HamburgerItem;
