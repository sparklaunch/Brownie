import styled from "styled-components";

const FeatureSpecimenContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FeatureSpecimenImage = styled.img`
  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
    width: 600px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 36px;
    width: 600px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 36px;
    width: 600px;
  }
`;

const FeatureSpecimenTextContainer = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
  }
`;

const FeatureSpecimenText = styled.p`
  @media screen and (max-width: 767px) {
    color: #515151;
    font-size: 16px;
    line-height: 1.5;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: #515151;
    font-size: 20px;
  }
  @media screen and (min-width: 993px) {
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
