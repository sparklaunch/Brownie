import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const NavigationContentBottomContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const NavigationLink = styled.p`
  @media screen and (max-width: 767px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
  }
  @media screen and (min-width: 993px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? Constants.ACCENT_COLOR : "#222222")};
  }
`;

export { NavigationContentBottomContainer, NavigationLink };
