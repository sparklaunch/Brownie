import Background from "../ClassroomScreen/Background";
import ModeButtons from "../ClassroomScreen/ModeButtons";
import Book from "../ClassroomScreen/Book";
import PageTurners from "../ClassroomScreen/PageTurners";
import BookTitle from "../ClassroomScreen/BookTitle";
import PageControllers from "../ClassroomScreen/PageControllers";
import HomeButton from "../ClassroomScreen/HomeButton";

const TrialScreen = () => {
  return (
    <div>
      <Background />
      <PageTurners />
      <BookTitle />
      <Book />
      <PageControllers />
      <HomeButton />
      <ModeButtons />
    </div>
  );
};

export default TrialScreen;
