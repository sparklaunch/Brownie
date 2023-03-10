import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const FooterContainer = styled.div`
  @media screen and (max-width: 767px) {
    border-top: 2px solid ${Constants.LIGHT_GRAY};
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-top: 2px solid ${Constants.LIGHT_GRAY};
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    border-top: 2px solid ${Constants.LIGHT_GRAY};
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AddressContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
`;

const NameText = styled.p`
  @media screen and (max-width: 767px) {
    margin-bottom: 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-right: 8px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
  @media screen and (min-width: 993px) {
    padding-right: 8px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
`;

const AddressText = styled.p`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 8px;
  }
  @media screen and (min-width: 993px) {
    padding-left: 8px;
  }
`;

const DetailContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: ${Constants.SOOT};
    padding: 4px 0;
  }
`;

const OwnerText = styled.p`
  @media screen and (max-width: 767px) {
    margin-bottom: 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-right: 8px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
  @media screen and (min-width: 993px) {
    padding-right: 8px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
`;

const RegistrationNumberText = styled.p`
  @media screen and (max-width: 767px) {
    margin-bottom: 3px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 0 12px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
  @media screen and (min-width: 993px) {
    padding: 0 12px;
    border-right: 1px solid ${Constants.LIGHT_GRAY};
  }
`;

const CustomerServiceNumberText = styled.p`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 12px;
  }
  @media screen and (min-width: 993px) {
    padding-left: 12px;
  }
`;

const CopyrightContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-top: 10px;
  }
  @media screen and (min-width: 993px) {
    padding-top: 10px;
  }
`;

const CopyrightText = styled.p`
  @media screen and (max-width: 767px) {
    letter-spacing: -1px;
    font-size: 14px;
    color: ${Constants.GRAY};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    color: ${Constants.GRAY};
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    color: ${Constants.GRAY};
  }
`;

export {
  FooterContainer,
  AddressContainer,
  NameText,
  AddressText,
  DetailContainer,
  OwnerText,
  RegistrationNumberText,
  CustomerServiceNumberText,
  CopyrightContainer,
  CopyrightText
};
