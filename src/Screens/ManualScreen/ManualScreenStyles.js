import styled from "styled-components";

const ManualContainer = styled.div`
  @media screen and (max-width: 767px) {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
  @media screen and (min-width: 1280px) {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

export { ManualContainer };
