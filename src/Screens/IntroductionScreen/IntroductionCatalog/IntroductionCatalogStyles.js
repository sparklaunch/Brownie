import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionCatalogOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px 0;
    background-color: ${Constants.LIGHTER_GRAY};
    border-top: 1px solid ${Constants.ACCENT_COLOR};
    border-bottom: 1px solid ${Constants.ACCENT_COLOR};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px 0;
    background-color: ${Constants.LIGHTER_GRAY};
    border-top: 1px solid ${Constants.ACCENT_COLOR};
    border-bottom: 1px solid ${Constants.ACCENT_COLOR};
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px;
    background-color: ${Constants.LIGHTER_GRAY};
    border-top: 1px solid ${Constants.ACCENT_COLOR};
    border-bottom: 1px solid ${Constants.ACCENT_COLOR};
  }
`;

const IntroductionCatalogInnerContainer = styled.div`
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

export { IntroductionCatalogOuterContainer, IntroductionCatalogInnerContainer };
