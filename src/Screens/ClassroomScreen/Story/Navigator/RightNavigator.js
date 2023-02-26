import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";
import {
  RightNavigatorContainer,
  RightNavigatorImage
} from "./RightNavigatorStyles";

const RightNavigator = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const onClickRightNavigator = () => {
    if (navigatorPage < 10) {
      setNavigatorPage(navigatorPage + 2);
    }
  };
  return (
    <RightNavigatorContainer onClick={onClickRightNavigator}>
      <RightNavigatorImage
        src={"/assets/images/icons/right_angle.svg"}
        alt={"Right Angle Icon"}
      />
    </RightNavigatorContainer>
  );
};

export default RightNavigator;
