import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionContentOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.WHITE};
    padding: 80px 0;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
    border-bottom: 1px solid ${Constants.LIGHT_GRAY};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.WHITE};
    padding: 80px 0;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
    border-bottom: 1px solid ${Constants.LIGHT_GRAY};
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Constants.WHITE};
    padding: 80px;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
    border-bottom: 1px solid ${Constants.LIGHT_GRAY};
  }
`;

const IntroductionContentInnerContainer = styled.div`
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
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionContentOuterContainer, IntroductionContentInnerContainer };
