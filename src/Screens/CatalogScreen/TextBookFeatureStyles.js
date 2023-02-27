import styled from "styled-components";

const TextBookFeatureContainer = styled.div`
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
  @media (768px <= width <= 992px) {
    margin-right: 12px;
  }
  @media (width >= 993px) {
    margin-right: 12px;
  }
`;

const TextBookFeatureText = styled.p`
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
