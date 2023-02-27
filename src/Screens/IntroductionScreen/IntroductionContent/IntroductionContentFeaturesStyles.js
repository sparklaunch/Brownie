import styled from "styled-components";

const IntroductionContentFeaturesContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionContentFeaturesContainer };
