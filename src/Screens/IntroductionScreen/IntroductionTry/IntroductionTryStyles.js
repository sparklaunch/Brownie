import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionTryOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.NEON};
    padding: 100px 0;
    overflow: clip;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.NEON};
    padding: 100px;
    overflow: clip;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.NEON};
    padding: 100px;
    overflow: clip;
  }
`;

const IntroductionTryInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const IntroductionTryLeftContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (min-width: 993px) {
    flex-shrink: 0;
  }
`;

export {
  IntroductionTryOuterContainer,
  IntroductionTryInnerContainer,
  IntroductionTryLeftContainer
};
