import styled from "styled-components";

const TryOuterContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const TryInnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: stretch;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: stretch;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: stretch;
  }
`;

export { TryOuterContainer, TryInnerContainer };
