import styled from "styled-components";

const StatusOuterContainer = styled.div`
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

const StatusInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 1200px;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
  }
  @media (width >= 993px) {
    width: 1200px;
  }
`;

const StatusContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
  @media (width >= 993px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export { StatusOuterContainer, StatusInnerContainer, StatusContainer };
