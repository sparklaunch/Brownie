import WordButton from "./WordButton";
import StoryButton from "./StoryButton";

const ModeButtons = () => {
  return (
    <div className={`absolute top-0 left-0`}>
      <WordButton />
      <StoryButton />
    </div>
  );
};

export default ModeButtons;
