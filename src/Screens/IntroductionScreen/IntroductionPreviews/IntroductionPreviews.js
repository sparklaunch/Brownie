import WordPreview from "./WordPreview";
import StoryPreview from "./StoryPreview";

const IntroductionPreviews = () => {
  return (
    <div className={`flex flex-row justify-center p-[140px]`}>
      <div className={`w-[1200px] flex flex-row justify-around`}>
        <WordPreview />
        <StoryPreview />
      </div>
    </div>
  );
};

export default IntroductionPreviews;
