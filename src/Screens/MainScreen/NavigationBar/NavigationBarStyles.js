import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const NavigationBarOuterContainer = styled.div`
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

const NavigationBarInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
  @media (993px <= width <= 1279px) {
    display: flex;
    flex-direction: row;
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    height: 140px;
    justify-content: space-between;
    align-items: center;
  }
  @media (width >= 1280px) {
    display: flex;
    flex-direction: row;
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    height: 140px;
    justify-content: space-between;
    align-items: center;
  }
`;

export { NavigationBarOuterContainer, NavigationBarInnerContainer };
