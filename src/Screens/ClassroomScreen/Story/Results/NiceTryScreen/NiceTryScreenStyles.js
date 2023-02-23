import styled from "styled-components";

const NiceTryScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: #ff92ac;
    padding: 8px;
    z-index: 3;
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: ${(props) => (props.isWordMode ? "0" : "20px")};
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    height: 200px;
    width: 215px;
    scale: 0.8;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(365px);
    padding: 20px 0;
    height: 200px;
  }
`;

export { NiceTryScreenContainer, NiceTryImage };
