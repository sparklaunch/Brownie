import styled from "styled-components";

const IntroductionCatalogSpecimenContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 993px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { IntroductionCatalogSpecimenContainer };
