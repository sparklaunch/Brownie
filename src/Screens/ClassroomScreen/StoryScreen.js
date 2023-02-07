import Background from "./Background";
import PageTurners from "./PageTurners";
import BookTitle from "./BookTitle";
import Book from "./Book";
import PageControllers from "./PageControllers";
import HomeButton from "./HomeButton";
import ModeButtons from "./ModeButtons";

const StoryScreen = () => {
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

export default StoryScreen;
