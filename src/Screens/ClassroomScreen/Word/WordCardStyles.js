import styled from "styled-components";

const WordCardContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const WordCardText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-size: 80px;
    font-weight: 900;
    margin-left: 24px;
    letter-spacing: -5px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 100px;
    font-weight: 900;
    margin-left: 24px;
    letter-spacing: -5px;
  }

  @media (min-width: 993px) and (min-height: 768px) and (min-height: 768px) {
    font-size: 120px;
    font-weight: 900;
    margin-left: 24px;
    letter-spacing: -5px;
  }
`;

export { WordCardContainer, WordCardText };
