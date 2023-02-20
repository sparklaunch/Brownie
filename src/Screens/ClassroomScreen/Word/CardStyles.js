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
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const CardInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 140px;
    bottom: 140px;
    left: 140px;
    right: 140px;
    background-color: white;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
  @media (min-width: 1280px) {
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
  @media (min-width: 1280px) {
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
  @media (min-width: 1280px) {
    position: absolute;
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
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const WordLeftPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: -90px;
    bottom: 30px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    left: -90px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const WordRightPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    right: -90px;
    bottom: 30px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    right: -90px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CardTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: -50px;
  }
`;

const HomeButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    right: -120px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: -90px;
  }
`;

const MicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -105px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const WordContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1280px) {
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;

const WordWaveContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const WordResultsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 10px;
    right: -35px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 10px;
    right: -35px;
  }
`;

const YouDidItScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
  WordWaveContainer,
  WordResultsContainer,
  YouDidItScreenContainer,
  CardInnerContainer
};
