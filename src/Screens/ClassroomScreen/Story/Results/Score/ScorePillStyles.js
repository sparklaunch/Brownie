import styled from "styled-components";

const ScorePillOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ScorePillInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 3px 16px;
    border-radius: 999px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 6px 20px;
    border-radius: 999px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid ${(props) => props.borderColor};
    padding: 6px 22px;
    border-radius: 999px;
  }
  @media screen and (min-width: 1280px) {
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
