import styled from "styled-components";

const BookContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    display: none;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

const BookWrapper = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    height: 100vh;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    height: 100vh;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    width: ${(props) => props.textbookSize.width}px;
    height: ${(props) => props.textbookSize.height}px;
  }
`;

const ModeSwitcherContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.8) translate(-100px, -10px);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.8) translate(-130px, -12px);
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: -120px;
  }
`;

const TextBookLeftPage = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: relative;
    object-fit: contain;
    object-position: right;
  }
`;

const TextBookRightPage = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: relative;
    object-fit: contain;
    object-position: right;
  }
`;

const LeftPageImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media (width >= 993px) and (height >= 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const LeftPageShade = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  @media (width >= 993px) and (height >= 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const RightPageShade = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 30px;
    left: -70px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 30px;
    left: -70px;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -90px;
  }
`;

const RightPagerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 30px;
    right: -70px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 30px;
    right: -70px;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -90px;
  }
`;

const PagerControllersContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: none;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: -50px;
    right: 0;
  }
`;

const HomeContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 20px;
    right: -80px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 20px;
    right: -80px;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    right: -90px;
  }
`;

const MicContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    right: -90px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    left: 50%;
    bottom: -100px;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const UnitInfoContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: none;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`;

const WaveAnimationContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const FeedbackBarContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const CongratzContainer = styled.div`
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

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const ScoreBarContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: -110px;
    left: -100px;
    right: -100px;
    bottom: 0;
    transform: scale(0.4);
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: -90px;
    left: -100px;
    right: -100px;
    bottom: 0;
    transform: scale(0.5);
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: -120px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0.6);
  }
`;

const LeftCompletedButtonsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (width >= 993px) and (height >= 768px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const RightCompletedButtonsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(-50%);
  }

  @media (width >= 993px) and (height >= 768px) {
    z-index: 2;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const GlowBorderContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.textbookSize.width / 2}px;
    height: ${(props) => props.textbookSize.height}px;
  }
`;

const GlowBorder = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px #ffd53d, inset 0 0 5px 5px #ffd53d;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px #ffd53d, inset 0 0 5px 5px #ffd53d;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 0 5px 5px #ffd53d, inset 0 0 5px 5px #ffd53d;
  }
`;

const LeftClickable = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (width >= 993px) and (height >= 768px) {
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
