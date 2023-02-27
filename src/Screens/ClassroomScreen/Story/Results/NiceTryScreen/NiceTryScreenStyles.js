import styled from "styled-components";

const NiceTryScreenContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ff92ac;
    padding: 8px;
    z-index: 3;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ff92ac;
    padding: 8px;
    z-index: 3;
  }

  @media (width >= 993px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: #ff92ac;
    padding: 8px;
    z-index: 3;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const NiceTryImage = styled.img`
  @media (width <= 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    height: 80px;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    height: 200px;
  }

  @media (width >= 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(360px);
    padding: 20px 0;
    height: 200px;
  }
`;

const ScorePillWrapper = styled.div`
  @media (width <= 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%) scale(0.6);
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%) scale(0.6);
  }

  @media (width >= 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);
  }
`;

export { NiceTryScreenContainer, NiceTryImage, ScorePillWrapper };
