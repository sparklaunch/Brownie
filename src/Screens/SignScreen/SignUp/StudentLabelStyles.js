import styled from "styled-components";

const StudentLabelContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
`;

const BulletIcon = styled.img`
  @media (480px <= width <= 767px) {
    width: 8px;
    height: 8px;
  }
  @media (768px <= width <= 992px) {
    width: 8px;
    height: 8px;
  }
  @media (width >= 993px) {
    width: 8px;
    height: 8px;
  }
`;

const StudentLabelText = styled.p`
  @media (480px <= width <= 767px) {
    margin-left: 12px;
    font-size: 18px;
  }
  @media (768px <= width <= 992px) {
    margin-left: 12px;
    font-size: 18px;
  }
  @media (width >= 993px) {
    margin-left: 12px;
    font-size: 18px;
  }
`;

export { StudentLabelContainer, BulletIcon, StudentLabelText };
