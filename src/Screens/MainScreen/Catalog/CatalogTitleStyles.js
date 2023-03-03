import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CatalogTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 8px;
  }
  @media screen and (min-width: 993px) {
  }
`;

const CatalogTitleText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    background-color: ${Constants.LIGHT_SKYBLUE};
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    background-color: ${Constants.LIGHT_SKYBLUE};
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
  @media screen and (min-width: 993px) {
    font-size: 16px;
    background-color: ${Constants.LIGHT_SKYBLUE};
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
`;

export { CatalogTitleContainer, CatalogTitleText };
