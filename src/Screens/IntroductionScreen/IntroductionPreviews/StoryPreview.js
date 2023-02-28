import {
  StoryCornerText,
  StoryCornerTitle,
  StoryPreviewContainer,
  StoryPreviewImage
} from "./StoryPreviewStyles";

const StoryPreview = () => {
  return (
    <StoryPreviewContainer>
      <StoryCornerTitle>Story 코너</StoryCornerTitle>
      <StoryCornerText>원어민 발음을 듣고 따라해 보세요</StoryCornerText>
      <StoryCornerText>정확히 읽었는지 AI가 바로 알려줘요</StoryCornerText>
      <StoryPreviewImage
        src={`/assets/images/story_preview.png`}
        alt={`Story Preview`}
      />
    </StoryPreviewContainer>
  );
};

export default StoryPreview;
