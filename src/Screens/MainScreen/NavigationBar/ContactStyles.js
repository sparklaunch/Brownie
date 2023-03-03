import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

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

const PhoneIcon = styled.img`
  @media screen and (max-width: 767px) {
    transform: translateY(-1px);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    transform: translateY(-1px);
  }
  @media screen and (min-width: 993px) {
    transform: translateY(-1px);
  }
`;

const ContactNumberText = styled.p`
  @media screen and (max-width: 767px) {
    margin-left: 12px;
    color: ${Constants.CHARCOAL};
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-left: 12px;
    color: ${Constants.CHARCOAL};
    font-size: 18px;
  }
  @media screen and (min-width: 993px) {
    margin-left: 12px;
    color: ${Constants.CHARCOAL};
    font-size: 18px;
  }
`;

export { ContactContainer, PhoneIcon, ContactNumberText };
