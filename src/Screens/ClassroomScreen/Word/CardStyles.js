import styled from "styled-components";

const CardOuterContainer = styled.div`
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
`;

const InsetBorderContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const InstructionsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }
`;

const ModeButtonsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }
`;

const PaginationContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-bottom-right-radius: 20px;
  }
`;

const WordLeftPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: -90px;
    bottom: 30px;
  }
`;

const WordRightPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    right: -90px;
    bottom: 30px;
  }
`;

const CardTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

const HomeButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    right: -120px;
  }
`;

const MicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -105px;
  }
`;

const WordContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WordWaveContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export {
  CardOuterContainer,
  InsetBorderContainer,
  InstructionsContainer,
  PaginationContainer,
  ModeButtonsContainer,
  WordLeftPageTurnerContainer,
  WordRightPageTurnerContainer,
  CardTitleContainer,
  HomeButtonContainer,
  MicrophoneContainer,
  WordContainer,
  WordWaveContainer
};
