import styled from "styled-components";

const CardOuterContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 140px;
    margin-right: 140px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 140px;
    margin-right: 140px;
  }
  @media (min-width: 1280px) {
  }
`;

const InsetBorderContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 1280px) {
  }
`;

const InstructionsContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }
  @media (min-width: 1280px) {
  }
`;

const ModeButtonsContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }
  @media (min-width: 1280px) {
  }
`;

const PaginationContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-bottom-right-radius: 20px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-bottom-right-radius: 20px;
  }
  @media (min-width: 1280px) {
  }
`;

export {
  CardOuterContainer,
  InsetBorderContainer,
  InstructionsContainer,
  PaginationContainer,
  ModeButtonsContainer
};
