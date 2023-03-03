import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const BackgroundPlaceholder = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: 100vh;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: 100vh;
  }

  @media screen and (min-width: 993px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: 100vh;
  }
`;

export { BackgroundPlaceholder };
