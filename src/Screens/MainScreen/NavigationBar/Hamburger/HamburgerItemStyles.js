import styled from "styled-components";

const HamburgerItemContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
    &:last-of-type {
      border-bottom: 1px solid #dfdfdf;
    }
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
  }
  @media (width >= 993px) and (height >= 768px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
  }
`;

const HamburgerItemText = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
  @media (width >= 993px) and (height >= 768px) {
    color: #222222;
    font-weight: bold;
    font-size: 14px;
  }
`;

export { HamburgerItemContainer, HamburgerItemText };
