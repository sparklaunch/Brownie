import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookHeaderOuterContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 80px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 80px;
  }
`;

const TextBookHeaderInnerContainer = styled.div`
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

const TextBookHeaderRectangle = styled.img`
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const TextBookHeaderTitle = styled.p`
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-top: 16px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-top: 16px;
  }
`;

export {
  TextBookHeaderOuterContainer,
  TextBookHeaderInnerContainer,
  TextBookHeaderRectangle,
  TextBookHeaderTitle
};
