import Contact from "./Contact";
import {
  NavigationContentTopContainer,
  NavigationLink
} from "./NavigationContentTopStyles";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import manualOpenAtom from "../../../Stores/Misc/manualOpen";

const NavigationContentTop = () => {
  const setManualOpen = useSetRecoilState(manualOpenAtom);
  const navigate = useNavigate();
  const onClickAdministrator = () => {
    navigate("/administrator");
  };
  const onClickManual = () => {
    setManualOpen(true);
  };
  return (
    <NavigationContentTopContainer>
      <NavigationLink onClick={onClickManual}>사용 설명서</NavigationLink>
      <NavigationLink onClick={onClickAdministrator}>
        관리자 사이트
      </NavigationLink>
      <Contact />
    </NavigationContentTopContainer>
  );
};

export default NavigationContentTop;
