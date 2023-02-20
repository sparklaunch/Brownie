import styled from "styled-components";

const TryOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
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
`;

export { TryOuterContainer, TryInnerContainer };
