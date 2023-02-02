import { useParams } from "react-router-dom";
import Background from "../ClassroomScreen/Background";

const TrialScreen = () => {
  const { level } = useParams();
  console.log(level);
  return (
    <div>
      <Background />
    </div>
  );
};

export default TrialScreen;
