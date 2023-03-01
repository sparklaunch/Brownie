import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookFeaturesOuterContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px auto;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px auto;
  }
`;

const TextBookFeaturesInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookFeaturesTitle = styled.p`
  @media (768px <= width <= 992px) {
    font-weight: bold;
    color: white;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  @media (width >= 993px) {
    font-weight: bold;
    color: white;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
`;

const TextBookFeaturesContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:first-of-type {
      margin-bottom: 40px;
    }
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:first-of-type {
      margin-bottom: 40px;
    }
  }
`;

export {
  TextBookFeaturesOuterContainer,
  TextBookFeaturesInnerContainer,
  TextBookFeaturesTitle,
  TextBookFeaturesContainer
};
