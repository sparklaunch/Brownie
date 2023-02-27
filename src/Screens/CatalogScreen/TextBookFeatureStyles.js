import styled from "styled-components";

const TextBookFeatureContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
`;

const TextBookFeatureBullet = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-right: 12px;
  }
  @media (width >= 993px) and (height >= 768px) {
    margin-right: 12px;
  }
`;

const TextBookFeatureText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    color: #515151;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 18px;
    color: #515151;
  }
`;

export { TextBookFeatureContainer, TextBookFeatureBullet, TextBookFeatureText };
