import styled from "styled-components";

const HamburgerItemContainer = styled.div`
  @media (480px <= width <= 767px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
    &:last-of-type {
      border-bottom: 1px solid #dfdfdf;
    }
  }
  @media (768px <= width <= 992px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
  }
  @media (width >= 993px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
  }
`;

const HamburgerItemText = styled.p`
  @media (480px <= width <= 767px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media (width >= 993px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { HamburgerItemContainer, HamburgerItemText };
