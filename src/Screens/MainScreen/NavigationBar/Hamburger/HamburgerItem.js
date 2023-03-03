import {
  HamburgerItemContainer,
  HamburgerItemText
} from "./HamburgerItemStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";

const HamburgerItem = ({ text, link }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenAtom);
  const onClickHamburgerItem = () => {
    setDrawerOpen(false);
    navigate(link);
  };
  return (
    <HamburgerItemContainer>
      <HamburgerItemText
        onClick={onClickHamburgerItem}
        accented={pathname === link}
      >
        {text}
      </HamburgerItemText>
    </HamburgerItemContainer>
  );
};

export default HamburgerItem;
