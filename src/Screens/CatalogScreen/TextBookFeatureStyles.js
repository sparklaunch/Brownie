import styled from "styled-components";

const TextBookFeatureContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
`;

const TextBookFeatureBullet = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    margin-right: 12px;
  }
`;

const TextBookFeatureText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    font-size: 18px;
    color: #515151;
  }
`;

export { TextBookFeatureContainer, TextBookFeatureBullet, TextBookFeatureText };
