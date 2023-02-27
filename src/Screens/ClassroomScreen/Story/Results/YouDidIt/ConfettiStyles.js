import styled from "styled-components";

const ConfettiContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (width >= 993px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { ConfettiContainer };
