import {
  EvaluationMethodContainer,
  EvaluationMethodDescription,
  EvaluationMethodTitle
} from "./EvaluationMethodStyles";

const EvaluationMethod = () => {
  return (
    <EvaluationMethodContainer>
      <EvaluationMethodTitle>평가 방식</EvaluationMethodTitle>
      <EvaluationMethodDescription>
        <span className={`text-[#1AB9C5]`}>발음의 정확성과 유창성</span> 모두
        측정 가능한 AI 기술을 이용하여, 정밀하게 측정하여 자동 평가합니다.
      </EvaluationMethodDescription>
    </EvaluationMethodContainer>
  );
};

export default EvaluationMethod;
