import styled from "styled-components";

const ManualContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: clip;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const LeftPager = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export { ManualContainer, LeftPager };
