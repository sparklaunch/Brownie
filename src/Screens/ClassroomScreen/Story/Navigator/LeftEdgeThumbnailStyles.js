import styled from "styled-components";

const LeftEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }

  @media (768px <= width <= 992px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }

  @media (width >= 993px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }
`;

const LeftEmptyThumbnailContainer = styled.div`
  @media (width <= 767px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media (768px <= width <= 992px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media (width >= 993px) {
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
