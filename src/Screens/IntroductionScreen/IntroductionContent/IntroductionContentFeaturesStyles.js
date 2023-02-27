import styled from "styled-components";

const IntroductionContentFeaturesContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionContentFeaturesContainer };
