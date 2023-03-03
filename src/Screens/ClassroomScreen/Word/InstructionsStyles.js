import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const InstructionText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 18px;
    color: ${Constants.DARK_GRAY};
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    color: ${Constants.DARK_GRAY};
  }

  @media screen and (min-width: 993px) {
    font-size: 18px;
    color: ${Constants.DARK_GRAY};
  }
`;

export { InstructionText };
