import { useParams } from "react-router-dom";

const TrialScreen = () => {
  const { level } = useParams();
  console.log(level);
  return <div></div>;
};

export default TrialScreen;
