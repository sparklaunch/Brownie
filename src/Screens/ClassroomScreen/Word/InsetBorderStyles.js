import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const InsetBorderContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border: 10px solid ${Constants.YELLOW};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
    border: 10px solid ${Constants.YELLOW};
  }
  @media screen and (min-width: 993px) {
    width: 100%;
    height: 100%;
    border: 10px solid ${Constants.YELLOW};
    border-radius: 20px;
  }
`;

export { InsetBorderContainer };
