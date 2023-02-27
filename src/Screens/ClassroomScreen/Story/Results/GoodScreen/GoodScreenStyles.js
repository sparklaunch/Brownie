import styled from "styled-components";

const GoodScreenContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const GoodImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    height: 80px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    height: 200px;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(-300px);
    padding: 20px 0;
    height: 200px;
  }
`;

const ScorePillWrapper = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { GoodScreenContainer, GoodImage, ScorePillWrapper };
