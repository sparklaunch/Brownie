import styled from "styled-components";

const TryContentsOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
`;

const TryContentsInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 1200px;
  }
  @media (min-width: 993px) {
    width: 1200px;
  }
`;

export { TryContentsOuterContainer, TryContentsInnerContainer };
