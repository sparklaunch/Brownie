import styled from "styled-components";

const ConfettiContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { ConfettiContainer };
