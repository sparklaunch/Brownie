import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const IntroductionHeaderOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const IntroductionHeaderInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
`;

const IntroductionHeaderImage = styled.img`
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 16px;
  }
`;

const IntroductionHeaderTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
  @media screen and (min-width: 993px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
`;

export {
  IntroductionHeaderOuterContainer,
  IntroductionHeaderInnerContainer,
  IntroductionHeaderImage,
  IntroductionHeaderTitle
};
