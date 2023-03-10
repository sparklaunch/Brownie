import StoryScreen from "../ClassroomScreen/Story/StoryScreen";
import { useRecoilValue } from "recoil";
import modeAtom from "../../Stores/Classroom/mode";
import WordScreen from "../ClassroomScreen/Word/WordScreen";
import AudioManager from "../ClassroomScreen/AudioManager";
import WindowSizeManager from "../ClassroomScreen/WindowSizeManager";
import MediaRecorderManager from "../ClassroomScreen/MediaRecorderManager";

const TrialScreen = () => {
  const mode = useRecoilValue(modeAtom);
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
    <>
      {content}
      <AudioManager />
      <WindowSizeManager />
      <MediaRecorderManager />
    </>
  );
};

export default TrialScreen;
