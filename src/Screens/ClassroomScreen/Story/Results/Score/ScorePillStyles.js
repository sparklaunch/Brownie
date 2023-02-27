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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 5px 15px;
    border-radius: 999px;
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 6px 18px;
    border-radius: 999px;
  }

  @media (993px <= width <= 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 7px 20px;
    border-radius: 999px;
  }
  @media (width >= 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 8px 24px;
    border-radius: 999px;
  }
`;

export { ScorePillInnerContainer, ScorePillOuterContainer };
