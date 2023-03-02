import styled from "styled-components";

const GoodScreenContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }
  @media screen and (min-width: 993px) {
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
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
    height: 80%;
    object-fit: contain;
    object-position: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
    height: 80%;
    object-fit: contain;
    object-position: center;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
    padding: 20px 0;
    height: 200px;
  }
`;

const ScorePillWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { GoodScreenContainer, GoodImage, ScorePillWrapper };
