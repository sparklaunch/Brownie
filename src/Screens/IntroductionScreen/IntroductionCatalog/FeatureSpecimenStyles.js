import styled from "styled-components";

const FeatureSpecimenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FeatureSpecimenImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 36px;
    width: 600px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 993px) {
    margin-bottom: 36px;
    width: 600px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const FeatureSpecimenTextContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    text-align: center;
  }
  @media (min-width: 993px) {
    text-align: center;
  }
`;

const FeatureSpecimenText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    color: #515151;
    font-size: 20px;
  }
  @media (min-width: 993px) {
    color: #515151;
    font-size: 20px;
  }
`;

export {
  FeatureSpecimenContainer,
  FeatureSpecimenImage,
  FeatureSpecimenTextContainer,
  FeatureSpecimenText
};