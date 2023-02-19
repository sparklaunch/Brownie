import styled from "styled-components";

const LeftPageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const LeftPageImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 100vh;
  }
`;

export { LeftPageContainer, LeftPageImageContainer };
