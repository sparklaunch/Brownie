import StoryScreen from "../ClassroomScreen/Story/StoryScreen";
import { useRecoilState } from "recoil";
import modeAtom from "../../Stores/Classroom/mode";
import WordScreen from "../ClassroomScreen/Word/WordScreen";

const TrialScreen = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  switch (mode) {
    case "story":
      return <StoryScreen />;
    case "word":
      return <WordScreen />;
  }
};

export default TrialScreen;
