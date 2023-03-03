import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const HamburgerItemContainer = styled.div`
  @media screen and (max-width: 767px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
    &:last-of-type {
      border-bottom: 1px solid ${Constants.LIGHT_GRAY};
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
    &:last-of-type {
      border-bottom: 1px solid ${Constants.LIGHT_GRAY};
    }
  }
  @media screen and (min-width: 993px) {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid ${Constants.LIGHT_GRAY};
  }
`;

const HamburgerItemText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { HamburgerItemContainer, HamburgerItemText };
