import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookComponentsAndDownloads = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    margin: 0 auto;
  }
`;

export { TextBookComponentsAndDownloads };
