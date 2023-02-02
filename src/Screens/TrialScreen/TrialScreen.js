import { useParams } from "react-router-dom";
import Background from "../ClassroomScreen/Background";
import ModeButtons from "../ClassroomScreen/ModeButtons";

const TrialScreen = () => {
  const { level } = useParams();
  console.log(level);
  return (
    <div>
      <Background />
      <ModeButtons />
    </div>
  );
};

export default TrialScreen;
