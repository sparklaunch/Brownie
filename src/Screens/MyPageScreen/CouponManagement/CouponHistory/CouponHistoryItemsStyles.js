import styled from "styled-components";

const CouponHistoryItemsContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    gap: 12px;
  }
`;

export { CouponHistoryItemsContainer };
