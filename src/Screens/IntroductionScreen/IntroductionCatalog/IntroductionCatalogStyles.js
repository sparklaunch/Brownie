import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionCatalogOuterContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px;
    background-color: #f4feff;
    border-top: 1px solid #1ab9c5;
    border-bottom: 1px solid #1ab9c5;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px;
    background-color: #f4feff;
    border-top: 1px solid #1ab9c5;
    border-bottom: 1px solid #1ab9c5;
  }
`;

const IntroductionCatalogInnerContainer = styled.div`
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
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionCatalogOuterContainer, IntroductionCatalogInnerContainer };
