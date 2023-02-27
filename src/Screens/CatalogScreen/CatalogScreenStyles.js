import styled from "styled-components";

const TextBookComponentsAndDownloads = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: 1200px;
    margin: 0 auto;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: 1200px;
    margin: 0 auto;
  }
`;

export { TextBookComponentsAndDownloads };
