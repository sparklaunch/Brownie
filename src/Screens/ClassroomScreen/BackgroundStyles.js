import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const BackgroundPlaceholder = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
  @media screen and (min-width: 993px) {
    background-color: ${Constants.LIGHT_SKYBLUE};
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export { BackgroundPlaceholder };
