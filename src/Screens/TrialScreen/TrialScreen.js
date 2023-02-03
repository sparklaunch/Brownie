import Background from "../ClassroomScreen/Background";
import ModeButtons from "../ClassroomScreen/ModeButtons";
import Book from "../ClassroomScreen/Book";
import PageTurners from "../ClassroomScreen/PageTurners";
import BookTitle from "../ClassroomScreen/BookTitle";

const TrialScreen = () => {
  return (
    <div>
      <Background />
      <PageTurners />
      <BookTitle />
      <Book />
      <ModeButtons />
    </div>
  );
};

export default TrialScreen;
