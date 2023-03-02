import styled from "styled-components";

const TryOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const TryInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: stretch;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: stretch;
  }
`;

export { TryOuterContainer, TryInnerContainer };
