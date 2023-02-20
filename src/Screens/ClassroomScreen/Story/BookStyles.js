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
  }
`;

const BookContentContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ModeButtonsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const LeftPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    left: 50px;
  }
`;

const RightPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    right: 50px;
  }
`;

const PageControllersContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

const HomeButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const BookTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

const CentralMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    right: 35px;
    transform: translateY(-50%);
  }
`;

const NavigatorContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

const WaveContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
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
  }
  @media (min-width: 1280px) {
    width: 1091px;
    height: 723px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const TextBookLeftPage = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

const TextBookRightPage = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

const LeftPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

const RightPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

export {
  BookContainer,
  BookContentContainer,
  ModeButtonsContainer,
  LeftPageTurnerContainer,
  RightPageTurnerContainer,
  PageControllersContainer,
  HomeButtonContainer,
  BookTitleContainer,
  CentralMicrophoneContainer,
  NavigatorContainer,
  WaveContainer,
  BookWrapper,
  TextBookContainer,
  TextBookRightPage,
  TextBookLeftPage,
  LeftPageImage,
  RightPageImage
};
