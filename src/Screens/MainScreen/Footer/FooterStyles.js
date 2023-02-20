import styled from "styled-components";

const FooterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    border-top: 2px solid #dfdfdf;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1280px) {
    border-top: 2px solid #dfdfdf;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AddressContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
`;

const NameText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
  @media (min-width: 1280px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
`;

const AddressText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-left: 8px;
  }
  @media (min-width: 1280px) {
    padding-left: 8px;
  }
`;

const DetailContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
`;

const OwnerText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
  @media (min-width: 1280px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
`;

const RegistrationNumberText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 0 12px;
    border-right: 1px solid #dfdfdf;
  }
  @media (min-width: 1280px) {
    padding: 0 12px;
    border-right: 1px solid #dfdfdf;
  }
`;

const CustomerServiceNumberText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-left: 12px;
  }
  @media (min-width: 1280px) {
    padding-left: 12px;
  }
`;

const CopyrightContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-top: 10px;
  }
  @media (min-width: 1280px) {
    padding-top: 10px;
  }
`;

const CopyrightText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    color: #acacac;
  }
  @media (min-width: 1280px) {
    font-size: 14px;
    color: #acacac;
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
