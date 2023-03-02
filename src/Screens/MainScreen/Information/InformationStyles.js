import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const InformationOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const InformationInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    margin: 40px 0;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    margin: 40px 0;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    margin: 50px 0;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    margin: 50px 0;
  }
`;

export { InformationOuterContainer, InformationInnerContainer };
