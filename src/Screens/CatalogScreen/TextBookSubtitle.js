import {
  TextBookSubtitleDescription,
  TextBookSubtitleInnerContainer,
  TextBookSubtitleOuterContainer,
  TextBookSubtitleTitle
} from "./TextBookSubtitleStyles";

const TextBookSubtitle = () => {
  return (
    <TextBookSubtitleOuterContainer>
      <TextBookSubtitleInnerContainer>
        <TextBookSubtitleTitle>
          재미있는 스토리와 노래로 익히는 파닉스 교재
        </TextBookSubtitleTitle>
        <TextBookSubtitleDescription>
          Phonics course books accompanied with fun stories and songs
        </TextBookSubtitleDescription>
      </TextBookSubtitleInnerContainer>
    </TextBookSubtitleOuterContainer>
  );
};

export default TextBookSubtitle;
