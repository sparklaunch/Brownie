import styled from "styled-components";

const StatusLabelsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CompletedContainer = styled.div`
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

const StudyingContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
`;

const BulletIcon = styled.img`
  @media screen and (max-width: 767px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 993px) {
    width: 14px;
    height: 14px;
  }
`;

const PyramidIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const StatusLabel = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-left: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    margin-left: 8px;
  }
  @media screen and (min-width: 993px) {
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
