import {
  TextbooksImage,
  TextbooksSpecimenContainer,
  TextbooksText,
  TextbooksTextContainer,
  TextbooksTitleText
} from "./TextbooksSpecimenStyles";

const TextbooksSpecimen = () => {
  return (
    <TextbooksSpecimenContainer>
      <TextbooksImage src={`/assets/images/textbooks.png`} alt={`Textbooks`} />
      <TextbooksTitleText>파닉스 전용 Phonics Fun Readers</TextbooksTitleText>
      <TextbooksTextContainer>
        <TextbooksText>
          파닉스를 학습하고 있는 아이들에게 효과적인 교재입니다.
        </TextbooksText>
        <TextbooksText>짧고 재미있는 스토리와, 호기심을 자극하는</TextbooksText>
        <TextbooksText>
          귀여운 캐릭터들이 등장하여 몰입감을 높여줍니다.
        </TextbooksText>
      </TextbooksTextContainer>
    </TextbooksSpecimenContainer>
  );
};

export default TextbooksSpecimen;
