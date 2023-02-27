import styled from "styled-components";

const ConfettiContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { ConfettiContainer };
