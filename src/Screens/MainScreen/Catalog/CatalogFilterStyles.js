import styled from "styled-components";

const CatalogFilterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export { CatalogFilterContainer };
