import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const JumbotronOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    height: 540px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const JumbotronInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 0 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 16px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const JumbotronFormContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const JumbotronSwiperContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;

export {
  JumbotronOuterContainer,
  JumbotronInnerContainer,
  JumbotronFormContainer,
  JumbotronSwiperContainer
};
