import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const HamburgerCustomerCenterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 993px) {
    margin-top: 40px;
  }
`;

const CustomerCenterText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
`;

const ContactContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const PhoneIconImage = styled.img`
  @media screen and (max-width: 767px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 993px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
`;

const ContactText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.CHARCOAL};
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.CHARCOAL};
    font-size: 14px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.CHARCOAL};
    font-size: 14px;
  }
`;

export {
  HamburgerCustomerCenterContainer,
  CustomerCenterText,
  ContactContainer,
  PhoneIconImage,
  ContactText
};
