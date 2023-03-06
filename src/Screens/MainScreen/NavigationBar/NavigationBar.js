import Logo from "./Logo";
import NavigationContent from "./NavigationContent";
import {
  NavigationBarInnerContainer,
  NavigationBarOuterContainer
} from "./NavigationBarStyles";
import { useRecoilValue } from "recoil";
import manualOpenAtom from "../../../Stores/Misc/manualOpen";
import ManualScreen from "../../ManualScreen/ManualScreen";

const NavigationBar = () => {
  const manualOpen = useRecoilValue(manualOpenAtom);
  return (
    <>
      <NavigationBarOuterContainer>
        <NavigationBarInnerContainer>
          <Logo />
          <NavigationContent />
        </NavigationBarInnerContainer>
      </NavigationBarOuterContainer>
      {manualOpen && <ManualScreen />}
    </>
  );
};

export default NavigationBar;
