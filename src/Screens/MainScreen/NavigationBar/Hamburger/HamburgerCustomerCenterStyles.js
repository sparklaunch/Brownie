import styled from "styled-components";

const HamburgerCustomerCenterContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    margin-top: 40px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin-top: 40px;
  }
  @media (min-width: 993px) {
    margin-top: 40px;
  }
`;

const CustomerCenterText = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
  @media (min-width: 993px) {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }
`;

const ContactContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const PhoneIconImage = styled.img`
  @media (min-width: 480px) and (max-width: 767px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
  @media (min-width: 993px) {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
`;

const ContactText = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    color: #3d3d3d;
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    color: #3d3d3d;
    font-size: 14px;
  }
  @media (min-width: 993px) {
    color: #3d3d3d;
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
