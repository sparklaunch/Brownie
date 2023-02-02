import { useParams } from "react-router-dom";
import Background from "../ClassroomScreen/Background";
import ModeButtons from "../ClassroomScreen/ModeButtons";
import Book from "../ClassroomScreen/Book";

const TrialScreen = () => {
  const { level } = useParams();
  console.log(level);
  return (
    <div>
      <Background />
      <Book />
      <ModeButtons />
    </div>
  );
};

export default TrialScreen;
