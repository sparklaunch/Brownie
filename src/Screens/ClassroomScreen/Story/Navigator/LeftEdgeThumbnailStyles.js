import styled from "styled-components";

const LeftEdgeThumbnailContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const LeftEmptyThumbnailContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }
  @media (min-width: 993px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }
`;

export { LeftEdgeThumbnailContainer, LeftEmptyThumbnailContainer };
