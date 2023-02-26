import StoryScreen from "../ClassroomScreen/Story/StoryScreen";
import { useRecoilState } from "recoil";
import modeAtom from "../../Stores/Classroom/mode";
import WordScreen from "../ClassroomScreen/Word/WordScreen";
import AudioManager from "../ClassroomScreen/AudioManager";
import WindowSizeManager from "../ClassroomScreen/WindowSizeManager";

const TrialScreen = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  let content;
  switch (mode) {
    case "story":
      content = <StoryScreen />;
      break;
    case "word":
      content = <WordScreen />;
      break;
  }
  return (
    <div>
      {content}
      <AudioManager />
      <WindowSizeManager />
    </div>
  );
};

export default TrialScreen;
