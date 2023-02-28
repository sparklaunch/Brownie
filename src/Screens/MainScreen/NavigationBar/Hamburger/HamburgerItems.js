import { HamburgerItemsContainer } from "./HamburgerItemsStyles";
import HamburgerItem from "./HamburgerItem";

const HamburgerItems = () => {
  return (
    <HamburgerItemsContainer>
      <HamburgerItem text={`온라인 학습관`} />
      <HamburgerItem text={`프로그램 소개`} />
      <HamburgerItem text={`교재 구성`} />
    </HamburgerItemsContainer>
  );
};

export default HamburgerItems;
