import styled from "styled-components";

const TextBookFeaturesOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px auto;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px auto;
  }
`;

const TextBookFeaturesInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookFeaturesTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-weight: bold;
    color: white;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
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
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:first-of-type {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 993px) and (min-height: 768px) {
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
