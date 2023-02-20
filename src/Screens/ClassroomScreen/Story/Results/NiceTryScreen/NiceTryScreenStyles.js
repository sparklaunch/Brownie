import styled from "styled-components";

const NiceTryScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: #ff92ac;
    padding: 8px;
    z-index: 3;
    border-radius: 0 0 32px 32px;
  }
`;

const NiceTryImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    height: 200px;
    width: 215px;
    scale: 0.8;
  }
`;

export { NiceTryScreenContainer, NiceTryImage };
