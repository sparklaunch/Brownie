import styled from "styled-components";

const ScorePillOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ScorePillInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 13px 44px;
    border-radius: 999px;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid ${(props) => props.borderColor};
    padding: 13px 44px;
    border-radius: 999px;
  }
`;

export { ScorePillOuterContainer, ScorePillInnerContainer };
