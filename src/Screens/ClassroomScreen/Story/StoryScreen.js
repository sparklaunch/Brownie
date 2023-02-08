import Background from "../Background";
import PageTurners from "./Pager/PageTurners";
import BookTitle from "./BookTitle";
import Book from "./Book";
import PageControllers from "./Controllers/PageControllers";
import HomeButton from "../HomeButton";
import ModeButtons from "../ModeButtons";
import Navigator from "./Navigator/Navigator";

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
      <Navigator />
    </div>
  );
};

export default StoryScreen;
