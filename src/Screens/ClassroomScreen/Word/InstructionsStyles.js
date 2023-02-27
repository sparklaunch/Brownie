import styled from "styled-components";

const InstructionText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    color: #515151;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 18px;
    color: #515151;
  }
`;

export { InstructionText };
