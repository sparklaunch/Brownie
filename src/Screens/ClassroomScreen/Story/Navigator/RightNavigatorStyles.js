import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const RightNavigatorContainer = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-left: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-left: 12px;
  }

  @media screen and (min-width: 993px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-left: 12px;
  }
`;

const RightNavigatorImage = styled.img`
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  @media screen and (min-width: 993px) {
  }
`;

export { RightNavigatorContainer, RightNavigatorImage };
