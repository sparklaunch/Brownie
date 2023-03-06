import styled from "styled-components";

const ScoreStarImage = styled.div`
  @media screen and (max-width: 767px) {
    ${(props) =>
      props.isEmpty
        ? `
      background-image: url("/assets/images/tiny_empty_star.svg");
    `
        : `
      background-image: url("/assets/images/tiny_star.svg");
    `}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${(props) =>
      props.isEmpty
        ? `
      background-image: url("/assets/images/small_empty_star.svg");
    `
        : `
      background-image: url("/assets/images/small_star.svg");
    `}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 10px;
    height: 10px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    ${(props) =>
      props.isEmpty
        ? `
      background-image: url("/assets/images/medium_empty_star.svg");
    `
        : `
      background-image: url("/assets/images/medium_star.svg");
    `}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 1280px) {
    ${(props) =>
      props.isEmpty
        ? `
      background-image: url("/assets/images/big_empty_star.svg");
    `
        : `
      background-image: url("/assets/images/big_star.svg");
    `}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 14px;
    height: 14px;
  }
`;

export { ScoreStarImage };
