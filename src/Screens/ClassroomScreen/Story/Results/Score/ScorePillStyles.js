import styled from "styled-components";

const ScorePillOuterContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ScorePillInnerContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 3px 16px;
    border-radius: 999px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 6px 20px;
    border-radius: 999px;
  }
  @media (993px <= width <= 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 6px 22px;
    border-radius: 999px;
  }
  @media (width >= 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 8px 26px;
    border-radius: 999px;
  }
`;

export { ScorePillInnerContainer, ScorePillOuterContainer };
