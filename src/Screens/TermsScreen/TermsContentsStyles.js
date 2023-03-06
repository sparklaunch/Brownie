import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TermsContentsContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    background-color: ${Constants.LIGHT_GRAY};
    border-radius: 8px;
    padding: 32px;
    margin: 32px auto;
  }
`;

const TermsItem = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
    margin: 16px 0;
  }
`;

const TermsSubtitle = styled.p`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
    font-weight: bold;
  }
`;

const TermsText = styled.p`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    line-height: 1.5;
    margin: 4px 0;
  }
`;

const TermsTitle = styled.p`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
