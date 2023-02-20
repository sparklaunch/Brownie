import {
  RecordingInstructionsContainer,
  RecordingInstructionsList,
  RecordingInstructionsListItem,
  RecordingInstructionsTitle,
  RecordingInstructionsTitleContainer
} from "./RecordingInstructionsStyles";

const RecordingInstructions = () => {
  return (
    <RecordingInstructionsContainer>
      <RecordingInstructionsTitleContainer>
        <img
          src={"assets/images/icons/snowflake_icon.svg"}
          alt={"Snowflake Icon"}
        />
        <RecordingInstructionsTitle>녹음 방법</RecordingInstructionsTitle>
      </RecordingInstructionsTitleContainer>
      <RecordingInstructionsList>
        <RecordingInstructionsListItem>
          선정 도서를 선택 후, 본문 전체(시작-끝)를 들으며 따라 읽으면서
          녹음하세요.
        </RecordingInstructionsListItem>
        <RecordingInstructionsListItem>
          참가자의 음성이 너무 작을 경우 평가가 어려울 수 있습니다.
        </RecordingInstructionsListItem>
        <RecordingInstructionsListItem>
          선정 도서의 본문 영어 읽기 내용만이 평가에 반영됩니다.
        </RecordingInstructionsListItem>
        <RecordingInstructionsListItem>
          본문 전체 읽기가 끝나면, <strong>[AI Report]</strong>를 눌러 성적표를
          확인합니다.
        </RecordingInstructionsListItem>
      </RecordingInstructionsList>
    </RecordingInstructionsContainer>
  );
};

export default RecordingInstructions;
