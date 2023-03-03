import styled from "styled-components";

const HamburgerItemContainer = styled.div`
  @media screen and (max-width: 767px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
    &:last-of-type {
      border-bottom: 1px solid #dfdfdf;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
    &:last-of-type {
      border-bottom: 1px solid #dfdfdf;
    }
  }
  @media screen and (min-width: 993px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #dfdfdf;
  }
`;

const HamburgerItemText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${(props) => (props.accented ? "#1AB9C5" : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${(props) => (props.accented ? "#1AB9C5" : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    color: ${(props) => (props.accented ? "#1AB9C5" : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { HamburgerItemContainer, HamburgerItemText };
