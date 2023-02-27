import styled from "styled-components";

const FeatureSpecimenContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FeatureSpecimenImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-bottom: 36px;
    width: 600px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (width >= 993px) and (height >= 768px) {
    margin-bottom: 36px;
    width: 600px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const FeatureSpecimenTextContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    text-align: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    text-align: center;
  }
`;

const FeatureSpecimenText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    color: #515151;
    font-size: 20px;
  }
  @media (width >= 993px) and (height >= 768px) {
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
