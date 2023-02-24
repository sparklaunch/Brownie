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
  const onClickHamburger = () => {
    setDrawerOpen(true);
  };
  return (
    <HamburgerContainer onClick={onClickHamburger}>
      <HamburgerIcon
        src={`/assets/images/hamburger.svg`}
        alt="Hamburger Icon"
      />
      <SwipeableDrawer
        anchor="right"
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
