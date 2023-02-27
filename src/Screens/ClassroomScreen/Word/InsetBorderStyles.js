import styled from "styled-components";

const InsetBorderContainer = styled.div`
  @media (width <= 767px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
    border-radius: 20px;
  }
`;

export { InsetBorderContainer };
