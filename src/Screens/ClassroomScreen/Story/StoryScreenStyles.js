import styled from "styled-components";

const StoryScreenContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    overflow: clip;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    overflow: clip;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    overflow: clip;
  }
`;

export { StoryScreenContainer };
