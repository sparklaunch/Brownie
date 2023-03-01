import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const JumbotronOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
    height: 540px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    position: relative;
    height: 540px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (width >= 993px) {
    position: relative;
    height: 540px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const JumbotronInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const JumbotronFormContainer = styled.div`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const JumbotronSwiperContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
  @media (width >= 993px) {
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
