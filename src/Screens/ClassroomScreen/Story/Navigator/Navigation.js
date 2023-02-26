import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";
import LeftNavigator from "./LeftNavigator";
import Thumbnails from "./Thumbnails";
import RightNavigator from "./RightNavigator";
import { NavigationContainer } from "./NavigationStyles";

const Navigation = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  return (
    <NavigationContainer open={navigatorOpen}>
      <LeftNavigator />
      <Thumbnails />
      <RightNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
