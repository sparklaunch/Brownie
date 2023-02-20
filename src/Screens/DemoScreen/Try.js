import TryTitle from "./TryTitle";
import TryContents from "./TryContents";
import TryInformation from "./TryInformation";
import { TryInnerContainer, TryOuterContainer } from "./TryStyles";

const Try = () => {
  return (
    <TryOuterContainer>
      <TryInnerContainer>
        <TryTitle />
        <TryContents />
        <TryInformation />
      </TryInnerContainer>
    </TryOuterContainer>
  );
};

export default Try;
