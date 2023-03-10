import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookFeatureContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
  }
`;

const TextBookFeatureBullet = styled.img`
  @media screen and (max-width: 767px) {
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 12px;
  }
  @media screen and (min-width: 993px) {
    margin-right: 12px;
  }
`;

const TextBookFeatureText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    color: ${Constants.DARK_GRAY};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    color: ${Constants.DARK_GRAY};
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    color: ${Constants.DARK_GRAY};
  }
`;

export { TextBookFeatureContainer, TextBookFeatureBullet, TextBookFeatureText };
