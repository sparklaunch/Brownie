import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookComponentsAndDownloads = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media (993px <= width <= 1279px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media (width >= 1280px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    margin: 0 auto;
  }
`;

export { TextBookComponentsAndDownloads };
