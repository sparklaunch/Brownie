import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TermsContentsContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    background-color: ${Constants.LIGHT_GRAY};
    border-radius: 8px;
    padding: 12px;
    margin: 32px auto;
    text-align: justify;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    background-color: ${Constants.LIGHT_GRAY};
    border-radius: 8px;
    padding: 16px;
    margin: 32px auto;
    text-align: justify;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    background-color: ${Constants.LIGHT_GRAY};
    border-radius: 8px;
    padding: 24px;
    margin: 32px auto;
    text-align: justify;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    background-color: ${Constants.LIGHT_GRAY};
    border-radius: 8px;
    padding: 32px;
    margin: 32px auto;
    text-align: justify;
  }
`;

const TermsItem = styled.div`
  @media screen and (max-width: 767px) {
    margin: 16px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 16px 0;
  }
  @media screen and (min-width: 993px) {
    margin: 16px 0;
  }
`;

const TermsSubtitle = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 12px;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    font-weight: bold;
  }
  @media screen and (min-width: 993px) {
    font-size: 16px;
    font-weight: bold;
  }
`;

const TermsText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 10px;
    line-height: 1.5;
    margin: 2px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 12px;
    line-height: 1.5;
    margin: 3px 0;
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    line-height: 1.5;
    margin: 4px 0;
  }
`;

const TermsTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 12px;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    font-weight: bold;
  }
  @media screen and (min-width: 993px) {
    font-size: 16px;
    font-weight: bold;
  }
`;

export {
  TermsSubtitle,
  TermsItem,
  TermsContentsContainer,
  TermsText,
  TermsTitle
};
