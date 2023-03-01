import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const AccountInformationOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 100px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 100px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 100px;
  }
`;

const AccountInformationInnerContainer = styled.div`
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

export { AccountInformationOuterContainer, AccountInformationInnerContainer };
