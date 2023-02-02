import Background from "../ClassroomScreen/Background";
import ModeButtons from "../ClassroomScreen/ModeButtons";
import Book from "../ClassroomScreen/Book";
import PageTurners from "../ClassroomScreen/PageTurners";

const TrialScreen = () => {
  return (
    <div>
      <Background />
      <PageTurners />
      <Book />
      <ModeButtons />
    </div>
  );
};

export default TrialScreen;
