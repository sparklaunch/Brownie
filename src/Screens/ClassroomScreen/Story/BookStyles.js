import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const BookContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavigatorContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media screen and (min-width: 993px) {
  }
`;

const BookWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TextBookContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: ${(props) => props.textbookSize.width}px;
  height: ${(props) => props.textbookSize.height}px;
`;

const ModeSwitcherContainer = styled.div`
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

const TextBookLeftPage = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 993px) {
    position: relative;
    object-fit: contain;
    object-position: right;
  }
`;

const TextBookRightPage = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 993px) {
    position: relative;
    object-fit: contain;
    object-position: right;
  }
`;

const LeftPageImage = styled.img`
  @media screen and (max-width: 767px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const LeftPageShade = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const RightPageImage = styled.img`
  @media screen and (max-width: 767px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const RightPageShade = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(
      to left,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const LeftPagerContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 30px;
    left: -50px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 30px;
    left: -60px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
    left: -90px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 50%;
    left: -90px;
  }
`;

const RightPagerContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 30px;
    right: -50px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 30px;
    right: -60px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
    right: -90px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 50%;
    right: -90px;
  }
`;

const PagerControllersContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: -50px;
    right: 0;
  }
`;

const HomeContainer = styled.div`
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

const MicContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    right: -65px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    left: 50%;
    bottom: -100px;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const UnitInfoContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -40px;
  }
`;

const WaveAnimationContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const FeedbackBarContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const CongratzContainer = styled.div`
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

const ScoreBarContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const LeftCompletedButtonsContainer = styled.div`
  @media screen and (max-width: 767px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 993px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const RightCompletedButtonsContainer = styled.div`
  @media screen and (max-width: 767px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 993px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const GlowBorderContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.textbookSize.width / 2}px;
    height: ${(props) => props.textbookSize.height}px;
  }
`;

const GlowBorder = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px ${Constants.YELLOW},
      inset 0 0 5px 5px ${Constants.YELLOW};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px ${Constants.YELLOW},
      inset 0 0 5px 5px ${Constants.YELLOW};
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px ${Constants.YELLOW},
      inset 0 0 5px 5px ${Constants.YELLOW};
  }
`;

const LeftClickable = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
`;

const RightClickable = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
`;

const LoadingCardWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export {
  BookContainer,
  NavigatorContainer,
  BookWrapper,
  TextBookContainer,
  TextBookRightPage,
  TextBookLeftPage,
  LeftPageImage,
  RightPageImage,
  ModeSwitcherContainer,
  LeftPagerContainer,
  RightPagerContainer,
  PagerControllersContainer,
  HomeContainer,
  MicContainer,
  UnitInfoContainer,
  WaveAnimationContainer,
  FeedbackBarContainer,
  CongratzContainer,
  LeftPageShade,
  RightPageShade,
  ScoreBarContainer,
  LeftCompletedButtonsContainer,
  RightCompletedButtonsContainer,
  GlowBorder,
  GlowBorderContainer,
  LeftClickable,
  RightClickable,
  LoadingCardWrapper
};
