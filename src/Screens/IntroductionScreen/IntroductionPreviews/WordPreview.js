import {
  WordCornerText,
  WordCornerTitle,
  WordPreviewContainer,
  WordPreviewImage
} from "./WordPreviewStyles";

const WordPreview = () => {
  return (
    <WordPreviewContainer>
      <WordCornerTitle>Word 코너</WordCornerTitle>
      <WordCornerText>발음을 듣고 따라 말하며</WordCornerText>
      <WordCornerText>단어를 익혀요</WordCornerText>
      <WordPreviewImage
        src={`/assets/images/word_preview.png`}
        alt={`Word Preview`}
      />
    </WordPreviewContainer>
  );
};

export default WordPreview;
