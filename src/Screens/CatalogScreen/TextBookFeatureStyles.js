import styled from "styled-components";

const TextBookFeatureContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
`;

const TextBookFeatureBullet = styled.img`
  @media (480px <= width <= 767px) {
    margin-right: 12px;
  }
  @media (768px <= width <= 992px) {
    margin-right: 12px;
  }
  @media (width >= 993px) {
    margin-right: 12px;
  }
`;

const TextBookFeatureText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 16px;
    line-height: 1.5;
    color: #515151;
  }
  @media (768px <= width <= 992px) {
    font-size: 18px;
    color: #515151;
  }
  @media (width >= 993px) {
    font-size: 18px;
    color: #515151;
  }
`;

export { TextBookFeatureContainer, TextBookFeatureBullet, TextBookFeatureText };
