import styled from "styled-components";

const CardOuterContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    background-color: white;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: ${(props) => props.textbookSize.width}px;
    height: ${(props) => props.textbookSize.height}px;
  }
`;

const InsetBorderContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const InstructionsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 20px;
    left: 140px;
  }
`;

const ModeButtonsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 10px;
    left: -100px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    left: -120px;
  }
`;

const PaginationContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-bottom-right-radius: 20px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-bottom-right-radius: 20px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffa63d;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const WordLeftPageTurnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    left: -80px;
    bottom: 30px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    left: -80px;
    bottom: 30px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    left: -90px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const WordRightPageTurnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    right: -80px;
    bottom: 30px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    right: -80px;
    bottom: 30px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    right: -90px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CardTitleContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: none;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: -40px;
  }
`;

const HomeButtonContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 20px;
    right: -120px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 20px;
    right: -120px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    right: -90px;
  }
`;

const MicrophoneContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    width: 52px;
    height: 52px;
    top: 40%;
    transform: translateY(-50%);
    right: -90px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    width: 52px;
    height: 52px;
    top: 45%;
    transform: translateY(-50%);
    right: -90px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const WordContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const WordResultsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 10px;
    right: -50%;
    transform: scale(0.6);
    width: 100vw;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 10px;
    right: -50%;
    transform: scale(0.6);
    width: 100vw;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%) scale(0.7);
  }
`;

const YouDidItScreenContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const LoadingIndicatorContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
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
