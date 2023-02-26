import styled from "styled-components";

const StoryScreenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }
  @media (min-width: 993px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }
`;

export { StoryScreenContainer };
