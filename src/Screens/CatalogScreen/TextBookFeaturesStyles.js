import styled from "styled-components";

const TextBookFeaturesOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 80px auto;
  }
`;

const TextBookFeaturesInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookFeaturesTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-weight: bold;
    color: white;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const TextBookFeaturesContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
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
