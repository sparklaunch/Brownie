import styled from "styled-components";

const TextBookComponentsAndDownloads = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 0;
    width: 1200px;
    margin: 0 auto;
  }
`;

export { TextBookComponentsAndDownloads };
