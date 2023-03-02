import {
  TryTitleContainer,
  TryTitleRectangle,
  TryTitleText
} from "./TryTitleStyles";

const TryTitle = () => {
  return (
    <TryTitleContainer>
      <TryTitleRectangle
        src={`/assets/images/rectangle.svg`}
        alt={`Rectangle Icon`}
      />
      <TryTitleText>체험하기</TryTitleText>
    </TryTitleContainer>
  );
};

export default TryTitle;
