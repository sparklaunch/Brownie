import styled from "styled-components";

const IntroductionContentFeaturesContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionContentFeaturesContainer };
