import {
  DrawerContainer,
  HamburgerContainer,
  HamburgerIcon
} from "./HamburgerStyles";
import { SwipeableDrawer } from "@mui/material";
import { useRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";
import HamburgerContent from "./HamburgerContent";

const Hamburger = () => {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenAtom);
  const onOpenDrawer = () => {};
  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };
  const onClickHamburgerIcon = () => {
    setDrawerOpen(true);
  };
  return (
    <HamburgerContainer>
      <HamburgerIcon
        src={`/assets/images/hamburger.svg`}
        alt="Hamburger Icon"
        onClick={onClickHamburgerIcon}
      />
      <SwipeableDrawer
        anchor="right" // 오른쪽에서 스와이프하면 드로어가 열립니다.
        open={drawerOpen}
        onOpen={onOpenDrawer}
        onClose={onCloseDrawer}
      >
        <DrawerContainer>
          <HamburgerContent />
        </DrawerContainer>
      </SwipeableDrawer>
    </HamburgerContainer>
  );
};

export default Hamburger;
