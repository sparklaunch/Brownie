import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";
import {
  CaretImage,
  NavigatorButtonInnerContainer,
  NavigatorButtonOuterContainer,
  PagesText
} from "./NavigatorButtonStyles";

const NavigatorButton = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  const onClickNavigatorButton = () => {
    setNavigatorOpen(!navigatorOpen);
  };
  return (
    <NavigatorButtonOuterContainer open={navigatorOpen}>
      <NavigatorButtonInnerContainer onClick={onClickNavigatorButton}>
        <PagesText>Pages</PagesText>
        <CaretImage
          src={"/assets/images/icons/caret_down.svg"}
          alt={"Caret Down Icon"}
          open={navigatorOpen}
        />
      </NavigatorButtonInnerContainer>
    </NavigatorButtonOuterContainer>
  );
};

export default NavigatorButton;
