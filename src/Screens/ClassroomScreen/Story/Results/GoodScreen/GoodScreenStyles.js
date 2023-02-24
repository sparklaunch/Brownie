import styled from "styled-components";

const GoodScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: ${(props) => (props.isWordMode ? "0" : "20px")};
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    height: 200px;
    width: 185px;
    scale: 0.8;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(-300px);
    padding: 20px 0;
    height: 200px;
  }
`;

const ScorePillWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { GoodScreenContainer, GoodImage, ScorePillWrapper };
