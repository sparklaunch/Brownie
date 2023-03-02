import styled from "styled-components";

const ThumbnailContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    overflow: clip;
    margin: 0 12px;
    ${(props) =>
      props.bordered
        ? `border: 4px solid #ffd53d;`
        : `border: 4px solid transparent;`}
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    overflow: clip;
    margin: 0 12px;
    ${(props) =>
      props.bordered
        ? `border: 4px solid #ffd53d;`
        : `border: 4px solid transparent;`}
  }

  @media screen and (min-width: 993px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    overflow: clip;
    margin: 0 12px;
    ${(props) =>
      props.bordered
        ? `border: 4px solid #ffd53d;`
        : `border: 4px solid transparent;`}
  }
`;

export { ThumbnailContainer };
