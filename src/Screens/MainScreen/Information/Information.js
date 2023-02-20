import EvaluationMethod from "./EvaluationMethod";
import Caution from "./Caution";
import {
  InformationInnerContainer,
  InformationOuterContainer
} from "./InformationStyles";

const Information = () => {
  return (
    <InformationOuterContainer>
      <InformationInnerContainer>
        <EvaluationMethod />
        <Caution />
      </InformationInnerContainer>
    </InformationOuterContainer>
  );
};

export default Information;
