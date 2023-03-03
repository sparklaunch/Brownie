import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const CentralPlayingMicrophoneContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    cursor: pointer;
  }
`;

const OuterCircle = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 993px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: ${Constants.ACCENT_COLOR};
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
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 993px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: ${Constants.ACCENT_COLOR};
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
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid ${Constants.ACCENT_COLOR};
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

  @media screen and (min-width: 993px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid ${Constants.ACCENT_COLOR};
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
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (min-width: 993px) {
    width: 70px;
    height: 70px;
  }
`;

export {
  CentralPlayingMicrophoneContainer,
  OuterCircle,
  InnerCircle,
  Wave,
  CentralPlayingMicrophoneImage
};
