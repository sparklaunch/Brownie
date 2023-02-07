import Background from "../Background";
import ModeButtons from "../ModeButtons";
import HomeButton from "../HomeButton";
import Card from "./Card";
import CardTitle from "./CardTitle";

const WordScreen = () => {
  return (
    <div>
      <Background />
      <HomeButton />
      <CardTitle />
      <Card />
      <ModeButtons />
    </div>
  );
};

export default WordScreen;
