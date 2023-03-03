import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CardOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
  @media screen and (min-width: 993px) {
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
  @media screen and (max-width: 767px) {
    position: relative;
    width: ${(props) => props.textbookSize.width}px;
    height: ${(props) => props.textbookSize.height}px;
    background-color: white;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: ${(props) => props.textbookSize.width}px;
    height: ${(props) => props.textbookSize.height}px;
    background-color: white;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    width: ${(props) => props.textbookSize.width}px;
    height: ${(props) => props.textbookSize.height}px;
    background-color: white;
    border-radius: 20px;
  }
`;

const InsetBorderContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const InstructionsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }
`;

const ModeButtonsContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 5px;
    left: -70px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 5px;
    left: -80px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    top: 5px;
    left: -100px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: -120px;
  }
`;

const PaginationContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Constants.ORANGE};
    border-bottom-right-radius: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Constants.ORANGE};
    border-bottom-right-radius: 20px;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Constants.ORANGE};
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const WordLeftPageTurnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    left: -50px;
    bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    left: -60px;
    bottom: 30px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    left: -90px;
    bottom: 0;
    transform: translateY(-50%);
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: -90px;
    top: 50%;
  }
`;

const WordRightPageTurnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    right: -50px;
    bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    right: -60px;
    bottom: 30px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    right: -90px;
    bottom: 0;
    transform: translateY(-50%);
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    right: -90px;
    top: 50%;
  }
`;

const CardTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: -40px;
  }
`;

const HomeButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 20px;
    right: -60px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    right: -70px;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    right: -90px;
  }
`;

const MicrophoneContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    right: -65px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 55px;
    height: 55px;
    top: 50%;
    transform: translateY(-50%);
    right: -80px;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    width: 70px;
    height: 70px;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const WordContainer = styled.div`
  @media screen and (max-width: 767px) {
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
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
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
    cursor: pointer;
  }
`;

const WordWaveContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const WordResultsContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
  }
`;

const YouDidItScreenContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const LoadingIndicatorContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 993px) {
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
  WordWaveContainer,
  WordResultsContainer,
  YouDidItScreenContainer,
  CardInnerContainer,
  LoadingIndicatorContainer
};
