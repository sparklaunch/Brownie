import {
  HamburgerItemContainer,
  HamburgerItemText
} from "./HamburgerItemStyles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";

const HamburgerItem = ({ text, link }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenAtom);
  const onClickHamburgerItem = () => {
    setDrawerOpen(false);
    navigate(link);
  };
  return (
    <HamburgerItemContainer>
      <HamburgerItemText onClick={onClickHamburgerItem}>
        {text}
      </HamburgerItemText>
    </HamburgerItemContainer>
  );
};

export default HamburgerItem;
