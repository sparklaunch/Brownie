import {
  HamburgerItemContainer,
  HamburgerItemText
} from "./HamburgerItemStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";

const HamburgerItem = ({ text, link }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const setDrawerOpen = useSetRecoilState(drawerOpenAtom);
  const onClickHamburgerItem = () => {
    setDrawerOpen(false);
    navigate(link);
  };
  return (
    <HamburgerItemContainer>
      <HamburgerItemText
        onClick={onClickHamburgerItem}
        accented={pathname === link} // 현재 경로가 link와 같은지 확인합니다.
      >
        {text}
      </HamburgerItemText>
    </HamburgerItemContainer>
  );
};

export default HamburgerItem;
