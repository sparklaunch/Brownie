import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const IntroductionPreviewsOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px 0;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px;
  }
`;

const IntroductionPreviewsInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (width >= 993px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export {
  IntroductionPreviewsOuterContainer,
  IntroductionPreviewsInnerContainer
};
