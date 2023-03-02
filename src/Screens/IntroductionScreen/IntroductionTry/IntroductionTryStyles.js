import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionTryOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1ac573;
    padding: 100px 0;
    overflow: clip;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1ac573;
    padding: 100px;
    overflow: clip;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1ac573;
    padding: 100px;
    overflow: clip;
  }
`;

const IntroductionTryInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const IntroductionTryLeftContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media (width >= 993px) {
    flex-shrink: 0;
  }
`;

export {
  IntroductionTryOuterContainer,
  IntroductionTryInnerContainer,
  IntroductionTryLeftContainer
};
