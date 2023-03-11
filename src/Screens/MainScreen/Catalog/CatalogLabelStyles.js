import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CatalogLabelContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
  }
`;

const CatalogLabelText = styled.p`
  @media screen and (max-width: 767px) {
    color: white;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-size: 14px;
  }
  @media screen and (min-width: 993px) {
    color: white;
    font-size: 14px;
  }
`;

export { CatalogLabelContainer, CatalogLabelText };
