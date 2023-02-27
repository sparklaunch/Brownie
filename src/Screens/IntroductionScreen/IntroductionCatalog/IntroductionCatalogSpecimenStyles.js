import styled from "styled-components";

const IntroductionCatalogSpecimenContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width >= 993px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { IntroductionCatalogSpecimenContainer };
