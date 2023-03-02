import styled from "styled-components";

const TermsContainer = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const PrivacyLink = styled.p`
  @media screen and (max-width: 767px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
  }
  @media screen and (min-width: 993px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
  }
`;

const TermsLink = styled.p`
  @media screen and (max-width: 767px) {
    padding-left: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 12px;
  }
  @media screen and (min-width: 993px) {
    padding-left: 12px;
  }
`;

export { TermsContainer, PrivacyLink, TermsLink };
