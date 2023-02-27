import styled from "styled-components";

const HamburgerItemContainer = styled.div`
  @media (width >= 480px) {
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
  @media (width >= 480px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
  @media (768px <= width <= 992px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
  @media (width >= 993px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
`;

export { HamburgerItemContainer, HamburgerItemText };
