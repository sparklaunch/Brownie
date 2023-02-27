import styled from "styled-components";

const CentralPlayingMicrophoneContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    cursor: pointer;
    width: 52px;
    height: 52px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: relative;
    cursor: pointer;
  }
`;

const OuterCircle = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const InnerCircle = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const Wave = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid #1ab9c5;
    animation: wave 1.3s infinite;
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid #1ab9c5;
    animation: wave 1.3s infinite;
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  }
`;

const CentralPlayingMicrophoneImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export {
  CentralPlayingMicrophoneContainer,
  OuterCircle,
  InnerCircle,
  Wave,
  CentralPlayingMicrophoneImage
};
