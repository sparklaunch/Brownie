import styled from "styled-components";

const BookContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const NavigatorContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
`;

const BookWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    height: 100vh;
    left: 140px;
    right: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  @media (min-width: 993px) {
    position: relative;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const ModeSwitcherContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: -20px;
    left: -120px;
  }
`;

const TextBookLeftPage = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 993px) {
    position: relative;
    width: 100%;
    height: 80vh;
    bottom: 20px;
    object-fit: contain;
    object-position: right;
  }
`;

const TextBookRightPage = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 993px) {
    position: relative;
    width: 100%;
    bottom: 20px;
    height: 80vh;
    object-fit: contain;
    object-position: right;
  }
`;

const LeftPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    object-fit: contain;
    object-position: right;
  }
  @media (min-width: 993px) {
    height: 80vh;
    object-fit: contain;
    object-position: right;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const LeftPageShade = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    object-fit: contain;
    object-position: left;
  }
  @media (min-width: 993px) {
    height: 80vh;
    object-fit: contain;
    object-position: left;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const RightPageShade = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 30px;
    left: -80px;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: calc(50% - 20px);
    transform: translateY(-50%);
    left: -80px;
  }
`;

const RightPagerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 30px;
    right: -80px;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: calc(50% - 20px);
    transform: translateY(-50%);
    right: -80px;
  }
`;

const PagerControllersContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: -70px;
    right: 0;
  }
`;

const HomeContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 20px;
    right: -80px;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: -70px;
    right: -80px;
  }
`;

const MicContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  @media (min-width: 993px) {
    position: absolute;
    left: 50%;
    bottom: -70px;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const UnitInfoContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: -60px;
    left: 0;
  }
`;

const WaveAnimationContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const FeedbackBarContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const CongratzContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const ScoreBarContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: -140px;
    left: -100px;
    right: -100px;
    bottom: 0;
    transform: scale(0.4);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0.7);
  }
`;

const LeftCompletedButtonsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const RightCompletedButtonsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const GlowBorder = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ direction }) => (direction === "left" ? "right: 0;" : "left: 0;")}
    width: 74vh;
    z-index: 1;
    box-shadow: 0 0 5px 5px #ffd53d, inset 0 0 5px 5px #ffd53d;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 5px 5px #ffd53d, inset 0 0 5px 5px #ffd53d;
  }
`;

const LeftClickable = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 993px) {
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
  LeftClickable,
  RightClickable,
  LoadingCardWrapper
};
