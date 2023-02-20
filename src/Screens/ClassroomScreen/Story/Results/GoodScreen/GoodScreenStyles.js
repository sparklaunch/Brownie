import styled from "styled-components";

const GoodScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: #ffc767;
    padding: 8px;
    z-index: 3;
  }
  @media (min-width: 1280px) {
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
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    height: 200px;
    width: 185px;
    scale: 0.8;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    height: 200px;
    width: 185px;
    scale: 0.8;
  }
`;

export { GoodScreenContainer, GoodImage };
