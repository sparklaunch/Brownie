import styled from "styled-components";

const ExcellentScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background-color: #80e6ac;
    padding: 8px;
    z-index: 3;
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: ${(props) => (props.isWordMode ? "0" : "20px")};
    left: 0;
    right: 0;
    height: 200px;
    background-color: #80e6ac;
    padding: 8px;
    z-index: 3;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const ExcellentImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 200px;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(376px);
    padding: 20px 0;
    height: 200px;
  }
`;

const ScorePillWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { ExcellentScreenContainer, ExcellentImage, ScorePillWrapper };
