import RecordingEnvironment from "./RecordingEnvironment";
import RecordingInstructions from "./RecordingInstructions";
import { CautionContainer, CautionTitle } from "./CautionStyles";

const Caution = () => {
  return (
    <CautionContainer>
      <CautionTitle>주의 사항</CautionTitle>
      <RecordingEnvironment />
      <RecordingInstructions />
    </CautionContainer>
  );
};

export default Caution;
