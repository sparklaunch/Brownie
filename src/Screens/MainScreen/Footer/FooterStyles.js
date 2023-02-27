import styled from "styled-components";

const FooterContainer = styled.div`
  @media (768px <= width <= 992px) {
    border-top: 2px solid #dfdfdf;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) {
    border-top: 2px solid #dfdfdf;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AddressContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
`;

const NameText = styled.p`
  @media (768px <= width <= 992px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
  @media (width >= 993px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
`;

const AddressText = styled.p`
  @media (768px <= width <= 992px) {
    padding-left: 8px;
  }
  @media (width >= 993px) {
    padding-left: 8px;
  }
`;

const DetailContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #707070;
    padding: 4px 0;
  }
`;

const OwnerText = styled.p`
  @media (768px <= width <= 992px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
  @media (width >= 993px) {
    padding-right: 8px;
    border-right: 1px solid #dfdfdf;
  }
`;

const RegistrationNumberText = styled.p`
  @media (768px <= width <= 992px) {
    padding: 0 12px;
    border-right: 1px solid #dfdfdf;
  }
  @media (width >= 993px) {
    padding: 0 12px;
    border-right: 1px solid #dfdfdf;
  }
`;

const CustomerServiceNumberText = styled.p`
  @media (768px <= width <= 992px) {
    padding-left: 12px;
  }
  @media (width >= 993px) {
    padding-left: 12px;
  }
`;

const CopyrightContainer = styled.div`
  @media (768px <= width <= 992px) {
    padding-top: 10px;
  }
  @media (width >= 993px) {
    padding-top: 10px;
  }
`;

const CopyrightText = styled.p`
  @media (768px <= width <= 992px) {
    font-size: 14px;
    color: #acacac;
  }
  @media (width >= 993px) {
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
