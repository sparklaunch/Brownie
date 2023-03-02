import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const StatusOuterContainer = styled.div`
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

const StatusInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
  }
`;

const StatusContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 993px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export { StatusOuterContainer, StatusInnerContainer, StatusContainer };
