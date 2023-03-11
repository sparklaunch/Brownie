import { HamburgerItemsContainer } from "./HamburgerItemsStyles";
import HamburgerItem from "./HamburgerItem";
import isLoggedIn from "../../../../Utilities/isLoggedIn";

const HamburgerItems = () => {
  return (
    <HamburgerItemsContainer>
      <HamburgerItem text={`온라인 학습관`} link={`/`} />
      <HamburgerItem text={`프로그램 소개`} link={`/introduction`} />
      <HamburgerItem text={`교재 구성`} link={`/catalog`} />
      {isLoggedIn() && <HamburgerItem text={`마이페이지`} link={`/mypage`} />}
    </HamburgerItemsContainer>
  );
};

export default HamburgerItems;
