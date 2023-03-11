import styled from "styled-components";

const RightEdgeThumbnailContainer = styled.div`
  @media screen and (max-width: 767px) {
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
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

  @media screen and (min-width: 993px) {
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

const RightEmptyThumbnailContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media screen and (min-width: 993px) {
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

export { RightEdgeThumbnailContainer, RightEmptyThumbnailContainer };
