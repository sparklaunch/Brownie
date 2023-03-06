import { HamburgerCloseIconImage } from "./HamburgerCloseIconStyles";
import { useSetRecoilState } from "recoil";
import drawerOpenAtom from "../../../../Stores/Misc/drawerOpen";

const HamburgerCloseIcon = () => {
  const setDrawerOpen = useSetRecoilState(drawerOpenAtom);
  const onClickHamburgerCloseIcon = () => {
    setDrawerOpen(false);
  };
  return (
    <HamburgerCloseIconImage
      src={`/assets/images/close.svg`}
      alt={`Close Icon`}
      onClick={onClickHamburgerCloseIcon}
    />
  );
};

export default HamburgerCloseIcon;
