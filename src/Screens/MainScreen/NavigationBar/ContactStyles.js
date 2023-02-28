import styled from "styled-components";

const ContactContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const PhoneIcon = styled.img`
  @media (480px <= width <= 767px) {
    transform: translateY(-1px);
  }
  @media (768px <= width <= 992px) {
    transform: translateY(-1px);
  }
  @media (width >= 993px) {
    transform: translateY(-1px);
  }
`;

const ContactNumberText = styled.p`
  @media (480px <= width <= 767px) {
    margin-left: 12px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media (768px <= width <= 992px) {
    margin-left: 12px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media (width >= 993px) {
    margin-left: 12px;
    color: #3d3d3d;
    font-size: 18px;
  }
`;

export { ContactContainer, PhoneIcon, ContactNumberText };
