import Background from "../Background";
import ModeButtons from "../ModeButtons";
import HomeButton from "../HomeButton";
import Card from "./Card";
import CardTitle from "./CardTitle";
import Microphone from "./Microphone";
import WordPageTurners from "./Pager/WordPageTurners";

const WordScreen = () => {
  return (
    <div>
      <Background />
      <CardTitle />
      <Card />
      <WordPageTurners />
      <HomeButton />
      <ModeButtons />
      <Microphone />
    </div>
  );
};

export default WordScreen;
