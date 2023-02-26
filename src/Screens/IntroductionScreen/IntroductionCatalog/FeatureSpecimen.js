import {
  FeatureSpecimenContainer,
  FeatureSpecimenImage,
  FeatureSpecimenText,
  FeatureSpecimenTextContainer
} from "./FeatureSpecimenStyles";

const FeatureSpecimen = () => {
  return (
    <FeatureSpecimenContainer>
      <FeatureSpecimenImage
        src={`/assets/images/feature.png`}
        alt={`Feature`}
      />
      <FeatureSpecimenTextContainer>
        <FeatureSpecimenText>
          파닉스 알파벳에 유의하여 읽을 수 있도록
        </FeatureSpecimenText>
        <FeatureSpecimenText>알파벳에 강조 색상 적용.</FeatureSpecimenText>
      </FeatureSpecimenTextContainer>
    </FeatureSpecimenContainer>
  );
};

export default FeatureSpecimen;
