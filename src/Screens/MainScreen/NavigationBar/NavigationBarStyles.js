import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const NavigationBarOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const NavigationBarInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    height: 140px;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    height: 140px;
    justify-content: space-between;
    align-items: center;
  }
`;

export { NavigationBarOuterContainer, NavigationBarInnerContainer };
