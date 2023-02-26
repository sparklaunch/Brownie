import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";
import {
  LeftNavigatorContainer,
  LeftNavigatorImage
} from "./LeftNavigatorStyles";

const LeftNavigator = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const onClickLeftNavigator = () => {
    if (navigatorPage !== 0) {
      setNavigatorPage(navigatorPage - 2);
    }
  };
  return (
    <LeftNavigatorContainer onClick={onClickLeftNavigator}>
      <LeftNavigatorImage
        src={"/assets/images/icons/left_angle.svg"}
        alt={"Left Angle Icon"}
      />
    </LeftNavigatorContainer>
  );
};

export default LeftNavigator;
