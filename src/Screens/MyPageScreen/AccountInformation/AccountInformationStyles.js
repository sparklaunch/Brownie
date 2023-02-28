import styled from "styled-components";

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
    width: 1200px;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
  }
  @media (width >= 993px) {
    width: 1200px;
  }
`;

export { AccountInformationOuterContainer, AccountInformationInnerContainer };
