import styled from "styled-components";

const BookContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
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
  @media (min-width: 1280px) {
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
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

const BookWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1280px) {
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
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    height: 100vh;
    left: 140px;
    right: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  @media (min-width: 1280px) {
    position: relative;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const ModeSwitcherContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: -120px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: -120px;
  }
`;

const TextBookLeftPage = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    position: relative;
    width: 100%;
    height: 80vh;
    object-fit: contain;
    object-position: right;
  }
`;

const TextBookRightPage = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    position: relative;
    width: 100%;
    height: 80vh;
    object-fit: contain;
    object-position: right;
  }
`;

const LeftPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 100vh;
    object-fit: contain;
    object-position: right;
  }
  @media (min-width: 1280px) {
    height: 80vh;
    object-fit: contain;
    object-position: right;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const RightPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 100vh;
    object-fit: contain;
    object-position: left;
  }
  @media (min-width: 1280px) {
    height: 80vh;
    object-fit: contain;
    object-position: left;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const LeftPagerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    left: -80px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -80px;
  }
`;

const RightPagerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    right: -80px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -80px;
  }
`;

const PagerControllersContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: -50px;
    right: 0;
  }
`;

const HomeContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    right: -80px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: -50px;
    right: -80px;
  }
`;

const MicContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: 1280px) {
    position: absolute;
    left: 50%;
    bottom: -70px;
    transform: translateX(-50%);
  }
`;

const UnitInfoContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: -50px;
    left: 0;
  }
`;

const WaveAnimationContainer = styled.div`
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

const FeedbackBarContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const CongratzContainer = styled.div`
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
  CongratzContainer
};
