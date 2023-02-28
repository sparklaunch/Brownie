import styled from "styled-components";

const CouponHistoryItemsContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (width >= 993px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
`;

export { CouponHistoryItemsContainer };
