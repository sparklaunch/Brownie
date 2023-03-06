import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilValue } from "recoil";
import LeftNavigator from "./LeftNavigator";
import Thumbnails from "./Thumbnails";
import RightNavigator from "./RightNavigator";
import { NavigationContainer } from "./NavigationStyles";

const Navigation = () => {
  const navigatorOpen = useRecoilValue(navigatorOpenAtom);
  return (
    <NavigationContainer open={navigatorOpen}>
      <LeftNavigator />
      <Thumbnails />
      <RightNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
