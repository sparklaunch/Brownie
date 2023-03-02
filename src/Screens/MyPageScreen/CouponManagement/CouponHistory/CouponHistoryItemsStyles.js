import styled from "styled-components";

const CouponHistoryItemsContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media (993px <= width <= 1279px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media (width >= 1280px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
`;

export { CouponHistoryItemsContainer };
