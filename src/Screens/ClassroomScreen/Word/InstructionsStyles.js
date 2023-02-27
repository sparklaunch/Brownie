import styled from "styled-components";

const InstructionText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-size: 18px;
    color: #515151;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    color: #515151;
  }

  @media (width >= 993px) and (height >= 768px) {
    font-size: 18px;
    color: #515151;
  }
`;

export { InstructionText };
