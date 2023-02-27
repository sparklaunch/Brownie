import styled from "styled-components";

const TextBooksImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1000px;
    margin: 100px auto;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1000px;
    margin: 100px auto;
  }
`;

export { TextBooksImage };
