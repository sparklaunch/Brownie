import WordButton from "./WordButton";
import StoryButton from "./StoryButton";

const ModeButtons = () => {
  return (
    <div className={`absolute top-[100px] left-[36px] grid gap-[24px]`}>
      <WordButton />
      <StoryButton />
    </div>
  );
};

export default ModeButtons;
