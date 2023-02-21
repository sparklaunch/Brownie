import {
  LoadingCardContainer,
  LoadingText,
  RotatingDocument
} from "./LoadingCardStyles";

const LoadingCard = () => {
  return (
    <LoadingCardContainer>
      <RotatingDocument
        src={`/assets/images/document.svg`}
        alt={`Rotating Document`}
      />
      <LoadingText>발음을 정밀 분석중입니다...</LoadingText>
    </LoadingCardContainer>
  );
};

export default LoadingCard;
