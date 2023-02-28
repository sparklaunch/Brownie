import styled from "styled-components";

const StatusLabelsContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CompletedContainer = styled.div`
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

const StudyingContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
`;

const BulletIcon = styled.img`
  @media (480px <= width <= 767px) {
    width: 14px;
    height: 14px;
  }
  @media (768px <= width <= 992px) {
    width: 14px;
    height: 14px;
  }
  @media (width >= 993px) {
    width: 14px;
    height: 14px;
  }
`;

const PyramidIcon = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const StatusLabel = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 16px;
    margin-left: 8px;
  }
  @media (768px <= width <= 992px) {
    font-size: 16px;
    margin-left: 8px;
  }
  @media (width >= 993px) {
    font-size: 16px;
    margin-left: 8px;
  }
`;

export {
  StatusLabelsContainer,
  CompletedContainer,
  StudyingContainer,
  BulletIcon,
  PyramidIcon,
  StatusLabel
};
