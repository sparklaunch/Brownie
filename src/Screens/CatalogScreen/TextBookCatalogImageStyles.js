import styled from "styled-components";

const TextBooksImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
    margin: 100px auto;
  }
  @media (768px <= width <= 992px) {
    width: 1000px;
    margin: 100px auto;
  }
  @media (width >= 993px) {
    width: 1000px;
    margin: 100px auto;
  }
`;

export { TextBooksImage };
