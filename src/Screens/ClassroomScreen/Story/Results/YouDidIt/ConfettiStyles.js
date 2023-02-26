import styled from "styled-components";

const ConfettiContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { ConfettiContainer };
