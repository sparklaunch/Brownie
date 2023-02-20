import styled from "styled-components";

const TryOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const TryInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: stretch;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: stretch;
  }
`;

export { TryOuterContainer, TryInnerContainer };
