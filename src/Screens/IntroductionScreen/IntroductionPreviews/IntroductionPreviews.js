import WordPreview from "./WordPreview";
import StoryPreview from "./StoryPreview";
import {
  IntroductionPreviewsInnerContainer,
  IntroductionPreviewsOuterContainer
} from "./IntroductionPreviewsStyles";

const IntroductionPreviews = () => {
  return (
    <IntroductionPreviewsOuterContainer>
      <IntroductionPreviewsInnerContainer>
        <WordPreview />
        <StoryPreview />
      </IntroductionPreviewsInnerContainer>
    </IntroductionPreviewsOuterContainer>
  );
};

export default IntroductionPreviews;
