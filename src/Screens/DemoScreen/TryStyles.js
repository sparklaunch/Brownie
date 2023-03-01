import styled from "styled-components";

const TryOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const TryInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: stretch;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: stretch;
  }
`;

export { TryOuterContainer, TryInnerContainer };
