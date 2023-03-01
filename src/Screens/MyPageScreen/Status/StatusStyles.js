import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const StatusOuterContainer = styled.div`
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

const StatusInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
  }
  @media (width >= 993px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
  }
`;

const StatusContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
  @media (width >= 993px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export { StatusOuterContainer, StatusInnerContainer, StatusContainer };
