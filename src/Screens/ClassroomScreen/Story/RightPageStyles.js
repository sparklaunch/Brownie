import styled from "styled-components";

const RightPageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: clip;
    cursor: pointer;
  }
`;

const RightPageImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 100vh;
    ${({ shouldScale }) => (shouldScale ? "transform: scale(1.15);" : null)}
  }
`;

export { RightPageContainer, RightPageImageContainer };
